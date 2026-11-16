"use client";

import Link from "next/link";
import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
import { site } from "@/lib/config";

export function CommandsInstall() {
  const { t } = useLanguage();

  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-narrow px-gutter py-[clamp(56px,7vw,88px)] text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.5px] text-accent-soft">
          {t.uiKicker}
        </p>
        <p className="mx-auto max-w-[52ch] text-body text-muted">
          {t.commands.uiCopy}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.inviteUrl} className={buttonClassName({ size: "lg" })}>
            {t.ctaApp}
          </a>
          <Link
            href="/"
            className={buttonClassName({ variant: "secondary", size: "lg" })}
          >
            {t.commands.back}
          </Link>
        </div>
      </div>
    </section>
  );
}
