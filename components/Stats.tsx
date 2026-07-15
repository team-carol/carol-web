"use client";

import { useLanguage } from "./LanguageProvider";
import type { SiteStats } from "@/lib/stats";

export function Stats({ stats }: { stats: SiteStats }) {
  const { t } = useLanguage();

  const items = [
    { value: stats.userCount, label: t.statUsers },
    { value: stats.serverCount, label: t.statServers },
    { value: stats.version, label: t.statVersion },
  ];

  return (
    <section
      aria-label="stats"
      className="mx-auto max-w-[880px] px-[clamp(20px,4vw,40px)] py-[clamp(56px,7vw,88px)]"
    >
      <div className="grid gap-8 text-center [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
        {items.map((item) => (
          <div key={item.label}>
            <p className="m-0 text-[clamp(34px,4vw,46px)] font-medium leading-[1.1] text-accent-soft">
              {item.value}
            </p>
            <p className="mt-[10px] text-sm text-dim">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
