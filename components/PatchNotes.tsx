"use client";

import { useLanguage } from "./LanguageProvider";
import { secondaryCta } from "./cta";
import { site } from "@/lib/config";
import type { Tweet } from "@/lib/tweets";

export function PatchNotes({ tweets }: { tweets: Tweet[] }) {
  const { t } = useLanguage();

  return (
    <section
      id="patchnotes"
      className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,8vw,104px)]"
    >
      <h2 className="m-0 mb-3 text-center text-[clamp(30px,3.6vw,46px)] font-medium leading-[1.2]">
        {t.patchTitle}
      </h2>
      <p className="m-0 mb-10 text-center text-base leading-[1.6] text-muted">
        {t.patchSub}
      </p>
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
        {tweets.map((tw, i) => (
          <article
            key={`${tw.date}-${i}`}
            className="flex flex-col gap-[14px] rounded-2xl border border-border-soft bg-surface p-6"
          >
            <div className="flex items-center gap-[10px]">
              <img
                src="/carolbot-avatar.png"
                alt=""
                className="h-7 w-7 rounded-lg bg-white object-cover shadow-[0_0_0_1px_#33333a]"
              />
              <span className="text-sm font-bold">캐롤봇</span>
              <span className="text-[13px] text-dim">{site.twitterHandle}</span>
            </div>
            <p className="m-0 flex-1 whitespace-pre-line text-[15px] leading-[1.6] text-ink-soft">
              {tw.text}
            </p>
            {tw.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={tw.image}
                alt=""
                loading="lazy"
                className="max-h-[220px] w-full rounded-xl border border-border-soft object-cover"
              />
            )}
            <p className="m-0 text-[13px] text-dim">{tw.date} · X</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href={site.twitterUrl}
          target="_blank"
          rel="noopener"
          className={`${secondaryCta} px-5 py-[10px] text-[15px] !text-ink-2`}
        >
          {t.patchFollow}
        </a>
      </div>
    </section>
  );
}
