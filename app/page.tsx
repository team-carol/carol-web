import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { AppInstall } from "@/components/AppInstall";
import { PatchNotes } from "@/components/PatchNotes";
import { ClosingCta } from "@/components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <AppInstall />
      <PatchNotes />
      <ClosingCta />
    </>
  );
}
