"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { secondaryCta } from "./cta";
import { site } from "@/lib/config";

export function Features() {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)] pb-[clamp(64px,8vw,104px)]"
    >
      <h2 className="m-0 mb-10 text-center text-[clamp(30px,3.6vw,46px)] font-medium leading-[1.2]">
        {t.featTitle}
      </h2>
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {t.features.map((f) => (
          <article
            key={f.title}
            className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-surface p-7"
          >
            <h3 className="m-0 text-[22px] font-medium leading-[1.2]">
              {f.title}
            </h3>
            <p className="m-0 text-[15.5px] leading-[1.6] text-muted">{f.copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href={site.commandsHref}
          className={`${secondaryCta} px-5 py-[10px] text-[15px] !text-ink-2`}
        >
          {t.featMore}
        </Link>
      </div>
    </section>
  );
}
