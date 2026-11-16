"use client";

import { useLanguage } from "./LanguageProvider";

export function CommandGroups() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex max-w-narrow flex-col gap-10 px-gutter pb-[clamp(56px,7vw,80px)]">
      {t.commands.groups.map((group) => (
        <section key={group.name}>
          <h2 className="crl-heading-3 mb-4">{group.name}</h2>
          <div className="rounded-card border border-border bg-surface px-6 py-1">
            {group.items.map((c, i) => (
              <div
                key={c.cmd}
                className={
                  "grid grid-cols-1 items-baseline gap-x-7 gap-y-[6px] py-[18px] sm:[grid-template-columns:minmax(110px,170px)_minmax(0,1fr)] " +
                  (i === 0 ? "" : "border-t border-border")
                }
              >
                <p>
                  <span className="inline-block rounded-small bg-surface-2 px-[10px] py-[3px] text-[15px] font-medium text-ink-2">
                    {c.cmd}
                  </span>
                </p>
                <p className="text-[15.5px] leading-[1.6] text-muted">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
