# carol-web

캐롤봇(maimai DX Discord 봇) 랜딩 페이지. **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript**.

디자인 원본: Claude Design 프로젝트 "Discord 봇 랜딩 페이지 디자인" → `캐롤봇 랜딩 v2.dc.html`.
실제 봇 프로젝트는 `../carolbot`.

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (타입 체크 포함)
npm start        # 빌드 결과 실행
```

## 페이지

- `/` — 랜딩 (`캐롤봇 랜딩 v2.dc.html`)
- `/commands` — 명령어 목록 (`캐롤봇 명령어 v2.dc.html`)

## 구조

- `app/layout.tsx` — 폰트/메타데이터 + 공용 `LanguageProvider` · `Nav` · `SiteFooter`로 모든 페이지 감쌈.
- `app/page.tsx` / `app/commands/page.tsx` — 각 페이지의 본문 섹션만 조립.
- `components/` — 랜딩 섹션(`Hero`, `Stats`, `Features`, `AppInstall`, `PatchNotes`, `ClosingCta`), 명령어 섹션(`CommandsIntro`, `CommandGroups`, `CommandsInstall`), 공용(`Nav`, `SiteFooter`)과 언어 컨텍스트.
- `lib/dictionary.ts` — ko/en/ja 3개 언어 문자열, 패치노트, 명령어 목록 데이터.
- `lib/config.ts` — 초대/약관/통계 등 사이트 상수(`NEXT_PUBLIC_*`로 오버라이드 가능).
- `app/globals.css` — Tailwind v4 `@theme` 디자인 토큰(색·폰트).
- `Nav`는 `usePathname`으로 현재 페이지의 "명령어" 링크를 활성 표시합니다.

## 다국어

언어 전환은 `components/LanguageProvider.tsx`가 클라이언트에서 처리하며 `localStorage`(`carolbot-lang`)에 저장합니다. 기본값은 한국어이며 원본 디자인 동작과 동일합니다.

## 남은 작업 / 참고

- **패치노트**: `lib/dictionary.ts`의 `tweets`는 예시 데이터입니다. 실제 트윗으로 교체하세요.
- **통계 값**: `lib/config.ts`의 `stats`는 정적 기본값입니다. 실데이터 연동 시 교체하세요.
- **아바타**: `public/carolbot-avatar.png` (512px로 다운스케일). 원본은 `~/Desktop/그림/148.png`.
