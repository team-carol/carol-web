import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { AppInstall } from "@/components/AppInstall";
import { PatchNotes } from "@/components/PatchNotes";
import { ClosingCta } from "@/components/ClosingCta";
import { getTweets } from "@/lib/tweets";
import { getStats } from "@/lib/stats";

// Re-fetch patch notes and stats at most every 10 minutes.
export const revalidate = 600;

export default async function Home() {
  const [tweets, stats] = await Promise.all([getTweets(), getStats()]);

  return (
    <>
      <Hero />
      <Stats stats={stats} />
      <Features />
      <AppInstall />
      <PatchNotes tweets={tweets} />
      <ClosingCta />
    </>
  );
}
