"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { primaryCta } from "./cta";
import { site } from "@/lib/config";
import { LANGS, type Lang } from "@/lib/dictionary";

const FLAG_CLASS: Record<Lang, string> = {
  ko: "fi fi-kr",
  en: "fi fi-gb",
  ja: "fi fi-jp",
};

const FLAG_LABEL: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

export function Nav() {
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-10 border-b border-border-soft bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-[clamp(20px,4vw,40px)] py-[14px]">
        <Link
          href="/"
          className="flex items-center gap-[10px] text-[17px] font-medium !text-ink hover:!text-ink"
        >
          <img
            src="/carolbot-avatar.svg"
            alt="캐롤봇"
            width={30}
            height={30}
            className="h-[30px] w-[30px] rounded-full bg-white object-cover shadow-[0_0_0_1px_#2e2e33]"
          />
          캐롤봇
        </Link>

        <span className="flex-1" />

        <Link
          href={site.commandsHref}
          className="text-[15px] !text-muted hover:!text-ink"
        >
          {t.navCommands}
        </Link>

        <span className="flex items-center gap-[2px]">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              aria-label={FLAG_LABEL[l]}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className={
                "flex cursor-pointer items-center justify-center rounded-lg border-none px-[7px] py-[6px] transition " +
                (lang === l
                  ? "bg-surface-2"
                  : "bg-transparent grayscale-[0.6] opacity-65 hover:opacity-90")
              }
            >
              <span
                className={FLAG_CLASS[l]}
                style={{
                  display: "block",
                  width: 19,
                  height: 13,
                  borderRadius: 2,
                  backgroundSize: "cover",
                }}
              />
            </button>
          ))}
        </span>

        <a
          href={site.inviteUrl}
          className={`${primaryCta} px-[18px] py-[9px] text-[15px] !text-accent-ink`}
        >
          {t.cta1}
        </a>
      </div>
    </nav>
  );
}
