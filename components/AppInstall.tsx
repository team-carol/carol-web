"use client";

import { useLanguage } from "./LanguageProvider";
import { primaryCta } from "./cta";
import { site } from "@/lib/config";

export function AppInstall() {
  const { t } = useLanguage();

  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-[880px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,8vw,104px)] text-center">
        <p className="m-0 mb-4 text-xs uppercase tracking-[0.5px] text-accent-soft">
          {t.uiKicker}
        </p>
        <h2 className="m-0 text-[clamp(28px,3.4vw,44px)] font-medium leading-[1.2] text-ink">
          {t.uiTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-base leading-[1.6] text-muted">
          {t.uiCopy}
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={site.inviteUrl}
            className={`${primaryCta} px-6 py-3 text-base !text-accent-ink`}
          >
            {t.ctaApp}
          </a>
        </div>
      </div>
    </section>
  );
}
