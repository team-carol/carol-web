"use client";

import { useLanguage } from "./LanguageProvider";
import { primaryCta } from "./cta";
import { site } from "@/lib/config";

export function ClosingCta() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-[880px] px-[clamp(20px,4vw,40px)] pb-[clamp(80px,10vw,128px)] text-center">
      <h2 className="m-0 text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.15]">
        {t.closeTitle}
      </h2>
      <div className="mt-8 flex justify-center gap-3">
        <a
          href={site.inviteUrl}
          className={`${primaryCta} px-6 py-3 text-base !text-accent-ink`}
        >
          {t.cta1}
        </a>
      </div>
    </section>
  );
}
