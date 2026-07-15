"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { primaryCta, secondaryCta } from "./cta";
import { site } from "@/lib/config";

export function CommandsInstall() {
  const { t } = useLanguage();

  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-[880px] px-[clamp(20px,4vw,40px)] py-[clamp(56px,7vw,88px)] text-center">
        <p className="m-0 mb-4 text-xs uppercase tracking-[0.5px] text-accent-soft">
          {t.uiKicker}
        </p>
        <p className="mx-auto max-w-[52ch] text-base leading-[1.6] text-muted">
          {t.commands.uiCopy}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.inviteUrl}
            className={`${primaryCta} px-6 py-3 text-base !text-accent-ink`}
          >
            {t.ctaApp}
          </a>
          <Link href="/" className={`${secondaryCta} px-6 py-3 text-base !text-ink-2`}>
            {t.commands.back}
          </Link>
        </div>
      </div>
    </section>
  );
}
