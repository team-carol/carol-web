import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";

const title = "캐롤봇 — maimai DX 기록을, 디스코드에서 바로";
const description =
  "캐롤봇으로 빠르게 마이마이 기록을 공유해보세요. 프로필, 레이팅 대상곡, 하루의 성과까지 슬래시 명령어 하나면 충분합니다.";

export const metadata: Metadata = {
  // Absolute URLs for the social/Discord embed images.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.team-carol.com",
  ),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "캐롤봇",
    locale: "ko_KR",
    url: "/",
    title,
    description,
  },
  // "summary" keeps the avatar as a compact thumbnail at its own aspect ratio
  // instead of a full-width banner. The image itself comes from
  // app/opengraph-image.png and app/twitter-image.png.
  twitter: { card: "summary", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/css/flag-icons.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
