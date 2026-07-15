import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { AppInstall } from "@/components/AppInstall";
import { PatchNotes } from "@/components/PatchNotes";
import { ClosingCta } from "@/components/ClosingCta";
import { getTweets } from "@/lib/tweets";

// Re-fetch patch notes from Notion at most every 10 minutes.
export const revalidate = 600;

export default async function Home() {
  const tweets = await getTweets();

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <AppInstall />
      <PatchNotes tweets={tweets} />
      <ClosingCta />
    </>
  );
}
