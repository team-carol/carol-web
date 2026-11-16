"use client";

import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
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
        className="max-h-[300px] w-full rounded-xl border border-border object-cover"
      />
    );
  }

  const rows = imgs.length === 2 ? "grid-rows-1" : "grid-rows-2";

  return (
    <div
      className={`grid aspect-[16/9] grid-cols-2 ${rows} gap-[2px] overflow-hidden rounded-xl border border-border`}
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
    "flex flex-col gap-[14px] rounded-card border border-border bg-surface p-6 transition-colors";

  const body = (
    <>
      <div className="flex items-center gap-[10px]">
        <img
          src="/carolbot-avatar.png"
          alt=""
          className="h-7 w-7 rounded-small bg-white object-cover shadow-[0_0_0_1px_var(--crl-border)]"
        />
        <span className="text-sm font-bold text-ink">캐롤봇</span>
        <span className="text-caption text-dim">{site.twitterHandle}</span>
      </div>
      <p className="flex-1 whitespace-pre-line text-body-sm text-ink-soft">
        {tweet.text}
      </p>
      {tweet.images && tweet.images.length > 0 && (
        <TweetGallery images={tweet.images} />
      )}
      <p className="text-caption text-dim">{tweet.date} · X</p>
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
      className={`${cardClass} text-ink hover:border-accent-hover`}
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
      className="mx-auto max-w-page px-gutter py-section"
    >
      <h2 className="crl-heading-1 mb-3 text-center">
        {t.patchTitle}
      </h2>
      <p className="mb-10 text-center text-body text-muted">
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
          className={buttonClassName({ variant: "secondary" })}
        >
          {t.patchFollow}
        </a>
      </div>
    </section>
  );
}
