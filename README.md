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

## 패치노트 (노션 연동)

패치노트 카드는 노션 DB에 적어둔 **트윗 링크**에서 본문·이미지·날짜를 자동으로 가져옵니다.

1. https://www.notion.so/my-integrations 에서 내부 통합을 만들고 시크릿을 발급.
2. 패치노트용 노션 DB에 **"링크"(URL)** 속성을 하나 만들고, 각 행에 트윗 URL을 붙여넣기.
3. DB 우측 상단 `⋯ → 연결(Connections)`에서 위 통합을 연결.
4. `.env`(로컬) 또는 배포 환경변수에 `NOTION_TOKEN`, `NOTION_PATCHNOTES_DB` 설정. (`.env.example` 참고)

- 구현: `lib/tweets.ts` — 노션에서 링크 목록을 읽어 `react-tweet`의 `getTweet(id)`로 각 트윗을 조회 → 카드 데이터로 매핑, 날짜 내림차순 정렬.
- 갱신은 **ISR 10분**(`app/page.tsx`의 `revalidate`)이라 재배포 없이 반영됩니다.
- 트윗 조회에 쓰는 X syndication은 **비공식 API**라 막힐 수 있고, 실패 시 `lib/dictionary.ts`의 `fallbackTweets`로 자동 대체됩니다.
- 환경변수 미설정 시에도 `fallbackTweets`로 정상 빌드/렌더됩니다.

## 통계 (등록 사용자 / 서버 / 버전)

`lib/stats.ts`가 캐롤봇 웹서버의 `GET /api/stats`를 ISR(10분)로 불러옵니다.

- 환경변수 `STATS_URL`에 엔드포인트 주소를 넣으세요. (예: `https://maimai.bitworkspace.kr/api/stats`)
- 기대 응답: `{ "userCount": 1024, "serverCount": 128, "version": "v2.4" }`
- 미설정/실패 시 `lib/config.ts`의 정적 기본값으로 폴백합니다.
- `userCount`/`serverCount`는 숫자/문자 모두 허용하며 천 단위 콤마로 포맷됩니다.

## 남은 작업 / 참고

- **아바타**: `public/carolbot-avatar.png` (512px로 다운스케일). 원본은 `~/Desktop/그림/148.png`.
