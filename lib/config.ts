// Site-wide constants. Values fall back to the landing design defaults and can
// be overridden with NEXT_PUBLIC_* env vars at build time.

export const site = {
  inviteUrl:
    process.env.NEXT_PUBLIC_INVITE_URL ??
    "https://discord.com/oauth2/authorize?client_id=1519147867124662362",
  termsUrl:
    process.env.NEXT_PUBLIC_TERMS_URL ?? "https://maimai.bitworkspace.kr/terms",
  privacyUrl:
    process.env.NEXT_PUBLIC_PRIVACY_URL ??
    "https://maimai.bitworkspace.kr/privacy",
  twitterUrl: "https://x.com/carolbot_maimai",
  twitterHandle: "@carolbot_maimai",
  githubUrl: "https://github.com/team-carol",
  email: "carolbot.official@gmail.com",
  commandsHref: "/commands",
};

// Headline stats shown in the landing hero. Swap these for live values when a
// stats endpoint is wired up.
export const stats = {
  userCount: process.env.NEXT_PUBLIC_USER_COUNT ?? "1,024",
  serverCount: process.env.NEXT_PUBLIC_SERVER_COUNT ?? "128",
  version: process.env.NEXT_PUBLIC_VERSION ?? "v2.4",
};

// Command chips shown on the hero card.
export const commandChips = [
  "/프로필",
  "/레이팅표",
  "/곡추천",
  "/랜덤",
  "/성과",
  "/검색",
  "/운세",
];
