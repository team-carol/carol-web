// Shared CTA button styles, matching the landing design.
// Add sizing (padding / font-size) at each call site.

export const primaryCta =
  "inline-flex items-center justify-center font-medium rounded-xl bg-accent text-accent-ink " +
  "shadow-[0_0_0_1px_var(--color-accent)] hover:bg-accent-hover transition-colors";

export const secondaryCta =
  "inline-flex items-center justify-center font-medium rounded-xl bg-surface-2 text-ink-2 " +
  "shadow-[0_0_0_1px_var(--color-border-2)] hover:bg-[#332e36] transition-colors";

// Standard page gutter used across sections.
export const gutter = "px-[clamp(20px,4vw,40px)]";
