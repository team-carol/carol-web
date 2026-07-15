import { stats as fallbackStats } from "./config";

// Live headline stats, fetched from the Carolbot web server's public endpoint.
//
// Configure with (server-only, not secret but no need to expose):
//   STATS_URL  — e.g. https://maimai.bitworkspace.kr/api/stats
//
// Expected response (see /api/stats spec):
//   { "userCount": 1024, "serverCount": 128, "version": "v2.4" }
//
// When STATS_URL is unset or the fetch fails, the static defaults in
// lib/config.ts are used so the section always renders.

export interface SiteStats {
  userCount: string;
  serverCount: string;
  version: string;
}

const STATS_URL = process.env.STATS_URL;
const REVALIDATE_SECONDS = 600;

export async function getStats(): Promise<SiteStats> {
  if (!STATS_URL) return fallbackStats;

  try {
    const res = await fetch(STATS_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) throw new Error(`stats responded ${res.status}`);

    const data = (await res.json()) as {
      userCount?: unknown;
      serverCount?: unknown;
      version?: unknown;
    };

    return {
      userCount: formatCount(data.userCount) ?? fallbackStats.userCount,
      serverCount: formatCount(data.serverCount) ?? fallbackStats.serverCount,
      version:
        typeof data.version === "string" && data.version.trim()
          ? data.version.trim()
          : fallbackStats.version,
    };
  } catch (err) {
    console.error("[stats] fetch failed, using fallback:", err);
    return fallbackStats;
  }
}

// Accepts a number or numeric string; returns a grouped string ("1,024") or
// null when the value isn't a usable number.
function formatCount(value: unknown): string | null {
  const n =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value.replace(/,/g, ""))
        : NaN;
  if (!Number.isFinite(n)) return null;
  return Math.round(n).toLocaleString("en-US");
}
