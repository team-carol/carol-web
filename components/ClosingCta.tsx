"use client";

import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
import { site } from "@/lib/config";

export function ClosingCta() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-narrow px-gutter pb-[clamp(80px,10vw,128px)] text-center">
      <h2 className="text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.15] text-ink">
        {t.closeTitle}
      </h2>
      <div className="mt-8 flex justify-center gap-3">
        <a href={site.inviteUrl} className={buttonClassName({ size: "lg" })}>
          {t.cta1}
        </a>
      </div>
    </section>
  );
}
