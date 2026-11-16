"use client";

import Link from "next/link";
import { buttonClassName } from "@team-carol/design-system";
import { useLanguage } from "./LanguageProvider";
import { site } from "@/lib/config";

export function Features() {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="mx-auto max-w-page px-gutter pb-(--crl-section-y)"
    >
      <h2 className="crl-heading-1 mb-10 text-center">{t.featTitle}</h2>
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {t.features.map((f) => (
          <article key={f.title} className="crl-card">
            <h3 className="crl-card__title">{f.title}</h3>
            <p className="crl-card__body">{f.copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href={site.commandsHref}
          className={buttonClassName({ variant: "secondary" })}
        >
          {t.featMore}
        </Link>
      </div>
    </section>
  );
}
