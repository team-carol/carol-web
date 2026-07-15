import { LanguageProvider } from "@/components/LanguageProvider";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { AppInstall } from "@/components/AppInstall";
import { PatchNotes } from "@/components/PatchNotes";
import { ClosingCta } from "@/components/ClosingCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <AppInstall />
        <PatchNotes />
        <ClosingCta />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
