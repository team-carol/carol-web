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

## 구조

- `app/layout.tsx` — Pretendard / Noto Sans JP / flag-icons 로드, 메타데이터.
- `app/page.tsx` — 섹션을 `LanguageProvider`로 감싸 조립.
- `components/` — 섹션별 컴포넌트(`Nav`, `Hero`, `Stats`, `Features`, `AppInstall`, `PatchNotes`, `ClosingCta`, `SiteFooter`)와 언어 컨텍스트.
- `lib/dictionary.ts` — ko/en/ja 3개 언어 문자열과 패치노트 데이터.
- `lib/config.ts` — 초대/약관/통계 등 사이트 상수(`NEXT_PUBLIC_*`로 오버라이드 가능).
- `app/globals.css` — Tailwind v4 `@theme` 디자인 토큰(색·폰트).

## 다국어

언어 전환은 `components/LanguageProvider.tsx`가 클라이언트에서 처리하며 `localStorage`(`carolbot-lang`)에 저장합니다. 기본값은 한국어이며 원본 디자인 동작과 동일합니다.

## 남은 작업 / 참고

- **아바타 이미지**: `public/carolbot-avatar.svg`는 임시 플레이스홀더입니다. 실제 캐롤봇 아바타 PNG로 교체하고 각 컴포넌트의 `src`를 함께 갱신하세요.
- **패치노트**: `lib/dictionary.ts`의 `tweets`는 예시 데이터입니다. 실제 트윗으로 교체하세요.
- **`/commands`**: 명령어 페이지(`캐롤봇 명령어 v2.dc.html`)는 별도 작업입니다. 현재 네비/버튼 링크만 연결되어 있습니다.
- **통계 값**: `lib/config.ts`의 `stats`는 정적 기본값입니다. 실데이터 연동 시 교체하세요.
