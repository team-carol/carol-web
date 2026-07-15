"use client";

import { useLanguage } from "./LanguageProvider";

export function CommandGroups() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-[clamp(20px,4vw,40px)] pb-[clamp(56px,7vw,80px)]">
      {t.commands.groups.map((group) => (
        <section key={group.name}>
          <h2 className="m-0 mb-4 text-[25px] font-medium leading-[1.2]">
            {group.name}
          </h2>
          <div className="rounded-2xl border border-border-soft bg-surface px-6 py-1">
            {group.items.map((c, i) => (
              <div
                key={c.cmd}
                className={
                  "grid items-baseline gap-x-7 gap-y-[6px] py-[18px] [grid-template-columns:minmax(110px,170px)_minmax(0,1fr)] " +
                  (i === 0 ? "" : "border-t border-border-soft")
                }
              >
                <p className="m-0">
                  <span className="inline-block rounded-lg bg-surface-2 px-[10px] py-[3px] text-[15px] font-medium text-ink-2">
                    {c.cmd}
                  </span>
                </p>
                <p className="m-0 text-[15.5px] leading-[1.6] text-muted">
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
