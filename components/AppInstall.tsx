"use client";

import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
import { site } from "@/lib/config";

export function AppInstall() {
  const { t } = useLanguage();

  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-narrow px-gutter py-section text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.5px] text-accent-soft">
          {t.uiKicker}
        </p>
        <h2 className="text-[clamp(28px,3.4vw,44px)] font-medium leading-[1.2] text-ink">
          {t.uiTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-body text-muted">
          {t.uiCopy}
        </p>
        <div className="mt-8 flex justify-center">
          <a href={site.inviteUrl} className={buttonClassName({ size: "lg" })}>
            {t.ctaApp}
          </a>
        </div>
      </div>
    </section>
  );
}
