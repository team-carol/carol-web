"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { primaryCta, secondaryCta } from "./cta";
import { commandChips, site } from "@/lib/config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-[clamp(40px,6vw,72px)] px-[clamp(20px,4vw,40px)] pt-[clamp(56px,8vw,104px)] [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
      <div>
        <h1 className="m-0 text-[clamp(40px,5vw,64px)] font-medium leading-[1.15] tracking-[-0.01em]">
          <span className="block">{t.hero1}</span>
          <span className="block">{t.hero2}</span>
        </h1>
        <p className="mt-6 max-w-[44ch] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-muted">
          {t.sub}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={site.inviteUrl}
            className={`${primaryCta} px-6 py-3 text-base !text-accent-ink`}
          >
            {t.cta1}
          </a>
          <Link
            href={site.commandsHref}
            className={`${secondaryCta} px-6 py-3 text-base !text-ink-2`}
          >
            {t.cta2}
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[22px] rounded-[32px] border border-border-soft bg-surface p-[clamp(28px,4vw,40px)]">
        <img
          src="/carolbot-avatar.svg"
          alt="캐롤봇 프로필 사진"
          className="aspect-square w-[min(180px,50vw)] rounded-[20px] bg-white object-contain shadow-[0_0_0_1px_#33333a]"
        />
        <div className="flex flex-wrap justify-center gap-2">
          {commandChips.map((chip) => (
            <span
              key={chip}
              className="rounded-3xl bg-surface-2 px-[14px] py-[6px] text-sm text-ink-2"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
