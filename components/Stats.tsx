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
      className="mx-auto max-w-narrow px-gutter py-[clamp(56px,7vw,88px)]"
    >
      {/* crl-stat-grid 는 auto-fill 이라 3개가 왼쪽으로 몰린다. 칸은 직접 나눈다. */}
      <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
        {items.map((item) => (
          // --hero: 큰 코랄 숫자가 위, 라벨이 아래 (DOM 은 라벨 → 수치 순)
          <div key={item.label} className="crl-stat crl-stat--hero">
            <p className="crl-stat__label">{item.label}</p>
            <p className="crl-stat__value">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
