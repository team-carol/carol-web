import { getTweet } from "react-tweet/api";
import { fallbackTweets, type Tweet } from "./dictionary";

export type { Tweet };

// Notion patch-notes source.
//
// Configure with two server-only env vars (never NEXT_PUBLIC_*):
//   NOTION_TOKEN          — internal integration secret (starts with "ntn_"/"secret_")
//   NOTION_PATCHNOTES_DB  — the patch-notes database id
//
// The database only needs ONE property:
//   링크  (URL)  — the tweet link, e.g. https://x.com/carolbot_maimai/status/123...
//
// The tweet body, image and date are pulled from the tweet itself via X's
// syndication data (the same source X's own embeds use, through react-tweet).
// That endpoint is undocumented and may break; if a lookup fails, or the env
// vars are absent, we fall back to `fallbackTweets` so the site still renders.

const TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_PATCHNOTES_DB;
const NOTION_VERSION = "2022-06-28";

const REVALIDATE_SECONDS = 600;
const MAX_ITEMS = 6;

export async function getTweets(): Promise<Tweet[]> {
  if (!TOKEN || !DATABASE_ID) return fallbackTweets;

  try {
    const urls = await fetchTweetUrls();
    const resolved = await Promise.all(urls.map(resolveTweet));
    const tweets = resolved
      .filter((t): t is Tweet & { sortKey: number } => t !== null)
      .sort((a, b) => b.sortKey - a.sortKey)
      .slice(0, MAX_ITEMS)
      .map(({ sortKey, ...tweet }) => tweet as Tweet);

    return tweets.length ? tweets : fallbackTweets;
  } catch (err) {
    console.error("[tweets] fetch failed, using fallback:", err);
    return fallbackTweets;
  }
}

/* --- Notion: read the list of tweet links ---------------------------------- */

async function fetchTweetUrls(): Promise<string[]> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 50 }),
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!res.ok) {
    throw new Error(`Notion responded ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as { results?: NotionPage[] };
  return (data.results ?? [])
    .map(linkFromPage)
    .filter((url): url is string => Boolean(url));
}

interface NotionPage {
  properties?: Record<string, NotionProperty>;
}

interface NotionProperty {
  type?: string;
  url?: string | null;
  rich_text?: { plain_text?: string; href?: string | null }[];
  title?: { plain_text?: string; href?: string | null }[];
}

// The "링크" URL property, tolerant of it being a rich-text/title cell instead.
function linkFromPage(page: NotionPage): string | undefined {
  const prop = page.properties?.["링크"];
  if (prop?.url) return prop.url;
  const rich = prop?.rich_text ?? prop?.title;
  const cell = rich?.[0];
  return cell?.href ?? cell?.plain_text;
}

/* --- Resolve a tweet link to card data ------------------------------------- */

function tweetIdFromUrl(url: string): string | null {
  return url.match(/status(?:es)?\/(\d+)/)?.[1] ?? null;
}

async function resolveTweet(
  url: string,
): Promise<(Tweet & { sortKey: number }) | null> {
  const id = tweetIdFromUrl(url);
  if (!id) return null;

  const tweet = await getTweet(id);
  if (!tweet) return null;

  const images = tweet.mediaDetails
    ?.filter((m) => m.type === "photo")
    .map((m) => m.media_url_https)
    .filter(Boolean);
  const created = new Date(tweet.created_at);

  return {
    text: cleanText(tweet.text),
    images: images?.length ? images : undefined,
    date: formatDate(created),
    sortKey: created.getTime(),
  };
}

// Drop the trailing t.co links X appends for attached media/quotes.
function cleanText(text: string): string {
  return text.replace(/\s*https:\/\/t\.co\/\S+\s*$/g, "").trim();
}

// -> "2026.07.02"; empty string if the date is unparseable.
function formatDate(d: Date): string {
  if (Number.isNaN(d.getTime())) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}
