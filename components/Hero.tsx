"use client";

import Link from "next/link";
import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
import { commandChips, site } from "@/lib/config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid max-w-page items-center gap-[clamp(40px,6vw,72px)] px-gutter pt-[clamp(56px,8vw,104px)] [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
      <div>
        <h1 className="crl-display">
          <span className="block">{t.hero1}</span>
          <span className="block">{t.hero2}</span>
        </h1>
        <p className="crl-body-lg mt-6 max-w-[44ch]">{t.sub}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={site.inviteUrl} className={buttonClassName({ size: "lg" })}>
            {t.cta1}
          </a>
          <Link
            href={site.commandsHref}
            className={buttonClassName({ variant: "secondary", size: "lg" })}
          >
            {t.cta2}
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[22px] rounded-hero border border-border bg-surface p-[clamp(28px,4vw,40px)]">
        <img
          src="/carolbot-avatar.png"
          alt="캐롤봇 프로필 사진"
          className="aspect-square w-[min(180px,50vw)] rounded-[20px] bg-white object-contain shadow-[0_0_0_1px_var(--crl-border)]"
        />
        <div className="flex flex-wrap justify-center gap-2">
          {commandChips.map((chip) => (
            <span key={chip} className="crl-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
