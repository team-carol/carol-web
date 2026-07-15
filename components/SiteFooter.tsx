"use client";

import { useLanguage } from "./LanguageProvider";
import { site } from "@/lib/config";

const pillLink =
  "inline-flex items-center gap-2 rounded-[10px] border border-border-soft px-[14px] py-2 text-sm !text-ink-soft transition-colors hover:!border-[#f2857f] hover:!text-ink";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-surface-2">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-[clamp(20px,4vw,40px)] pb-10 pt-[clamp(48px,6vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        <div>
          <span className="flex items-center gap-[10px] text-xl font-medium text-ink">
            <img
              src="/carolbot-avatar.svg"
              alt=""
              className="h-[30px] w-[30px] rounded-full bg-white object-cover shadow-[0_0_0_1px_#33333a]"
            />
            team carol
          </span>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener"
            className={`${pillLink} mt-5`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            Github
          </a>
        </div>

        <div>
          <p className="m-0 mb-4 text-[13px] text-dim">{t.footTerms}</p>
          <div className="flex flex-col items-start gap-3">
            <a
              href={site.termsUrl}
              target="_blank"
              rel="noopener"
              className="text-sm !text-ink-soft hover:!text-ink"
            >
              {t.footTos}
            </a>
            <a
              href={site.privacyUrl}
              target="_blank"
              rel="noopener"
              className="text-sm !text-ink-soft hover:!text-ink"
            >
              {t.footPrivacy}
            </a>
          </div>
        </div>

        <div>
          <p className="m-0 mb-4 text-[13px] text-dim">{t.footSupport}</p>
          <div className="flex flex-col items-start gap-3">
            <a
              href={site.twitterUrl}
              target="_blank"
              rel="noopener"
              className={pillLink}
            >
              𝕏 {site.twitterHandle}
            </a>
            <a href={`mailto:${site.email}`} className={pillLink}>
              ✉ {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-[14px] px-[clamp(20px,4vw,40px)] pb-[clamp(40px,5vw,56px)]">
        <p className="m-0 border-l-[3px] border-border-soft pl-[14px] text-[12.5px] leading-[1.7] text-faint">
          {t.footDisc1}
        </p>
        <p className="m-0 border-l-[3px] border-border-soft pl-[14px] text-[12.5px] leading-[1.7] text-faint">
          {t.footDisc2}
        </p>
      </div>
    </footer>
  );
}
