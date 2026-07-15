"use client";

import { useLanguage } from "./LanguageProvider";
import { secondaryCta } from "./cta";
import { site } from "@/lib/config";
import type { Tweet } from "@/lib/tweets";

// Twitter-style media grid: 1 = single, 2 = side by side, 3 = one tall + two
// stacked, 4 = 2×2. The whole block is a fixed 16:9 box so cards stay compact.
function TweetGallery({ images }: { images: string[] }) {
  const imgs = images.slice(0, 4);
  const cell = "h-full w-full min-h-0 object-cover";

  if (imgs.length === 1) {
    return (
      <img
        src={imgs[0]}
        alt=""
        loading="lazy"
        className="max-h-[300px] w-full rounded-xl border border-border-soft object-cover"
      />
    );
  }

  const rows = imgs.length === 2 ? "grid-rows-1" : "grid-rows-2";

  return (
    <div
      className={`grid aspect-[16/9] grid-cols-2 ${rows} gap-[2px] overflow-hidden rounded-xl border border-border-soft`}
    >
      {imgs.length === 2 && (
        <>
          <img src={imgs[0]} alt="" loading="lazy" className={cell} />
          <img src={imgs[1]} alt="" loading="lazy" className={cell} />
        </>
      )}
      {imgs.length === 3 && (
        <>
          <img
            src={imgs[0]}
            alt=""
            loading="lazy"
            className={`${cell} row-span-2`}
          />
          <img src={imgs[1]} alt="" loading="lazy" className={cell} />
          <img src={imgs[2]} alt="" loading="lazy" className={cell} />
        </>
      )}
      {imgs.length >= 4 && (
        <>
          {imgs.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className={cell}
            />
          ))}
        </>
      )}
    </div>
  );
}

// One patch-note card. Becomes a link to the source tweet when a URL is known.
function TweetCard({ tweet }: { tweet: Tweet }) {
  const cardClass =
    "flex flex-col gap-[14px] rounded-2xl border border-border-soft bg-surface p-6 transition-colors";

  const body = (
    <>
      <div className="flex items-center gap-[10px]">
        <img
          src="/carolbot-avatar.png"
          alt=""
          className="h-7 w-7 rounded-lg bg-white object-cover shadow-[0_0_0_1px_#33333a]"
        />
        <span className="text-sm font-bold text-ink">캐롤봇</span>
        <span className="text-[13px] text-dim">{site.twitterHandle}</span>
      </div>
      <p className="m-0 flex-1 whitespace-pre-line text-[15px] leading-[1.6] text-ink-soft">
        {tweet.text}
      </p>
      {tweet.images && tweet.images.length > 0 && (
        <TweetGallery images={tweet.images} />
      )}
      <p className="m-0 text-[13px] text-dim">{tweet.date} · X</p>
    </>
  );

  if (!tweet.url) {
    return <article className={cardClass}>{body}</article>;
  }

  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClass} !text-ink hover:!border-[#f2857f]`}
    >
      {body}
    </a>
  );
}

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
          <TweetCard key={`${tw.date}-${i}`} tweet={tw} />
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
