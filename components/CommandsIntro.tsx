"use client";

import { useLanguage } from "./LanguageProvider";

export function CommandsIntro() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-[880px] px-[clamp(20px,4vw,40px)] pb-[clamp(40px,5vw,56px)] pt-[clamp(56px,8vw,96px)] text-center">
      <p className="m-0 mb-4 text-xs uppercase tracking-[0.5px] text-accent-soft">
        캐롤봇
      </p>
      <h1 className="m-0 text-[clamp(36px,5vw,60px)] font-medium leading-[1.15]">
        {t.commands.title}
      </h1>
      <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-[1.6] text-muted">
        {t.commands.sub}
      </p>
    </section>
  );
}
