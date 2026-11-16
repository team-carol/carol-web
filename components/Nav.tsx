"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
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
  const pathname = usePathname();
  const onCommands = pathname === site.commandsHref;

  return (
    <nav className="crl-topbar">
      {/* 휴대폰에서는 간격을 좁혀 한 줄에 들어가게 한다 */}
      <div className="crl-topbar__inner gap-3 sm:gap-6">
        <Link href="/" className="crl-brand shrink-0">
          <img
            src="/carolbot-avatar.png"
            alt="캐롤봇"
            width={30}
            height={30}
            className="crl-brand__mark"
          />
          <span className="hidden sm:inline">캐롤봇</span>
        </Link>

        <span className="crl-topbar__spacer" />

        <Link
          href={site.commandsHref}
          aria-current={onCommands ? "page" : undefined}
          className="crl-topbar__link shrink-0"
        >
          {t.navCommands}
        </Link>

        <span className="flex shrink-0 items-center gap-[2px]">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              aria-label={FLAG_LABEL[l]}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className={
                "flex cursor-pointer items-center justify-center rounded-small border-none px-[7px] py-[6px] transition " +
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
          className={buttonClassName(
            { size: "sm" },
            "shrink-0 px-3 sm:px-[18px] sm:py-[9px] sm:text-[15px]",
          )}
        >
          <span className="sm:hidden">{t.navInvite}</span>
          <span className="hidden sm:inline">{t.cta1}</span>
        </a>
      </div>
    </nav>
  );
}
