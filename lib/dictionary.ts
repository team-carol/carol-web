export const LANGS = ["ko", "en", "ja"] as const;
export type Lang = (typeof LANGS)[number];

export interface Feature {
  title: string;
  copy: string;
}

export interface CommandItem {
  cmd: string;
  desc: string;
}

export interface CommandGroup {
  name: string;
  items: CommandItem[];
}

export interface CommandsPage {
  title: string;
  sub: string;
  uiCopy: string;
  back: string;
  groups: CommandGroup[];
}

export interface Dictionary {
  navCommands: string;
  hero1: string;
  hero2: string;
  sub: string;
  cta1: string;
  cta2: string;
  ctaApp: string;
  statUsers: string;
  statServers: string;
  statVersion: string;
  uiKicker: string;
  uiTitle: string;
  uiCopy: string;
  featTitle: string;
  features: Feature[];
  featMore: string;
  patchTitle: string;
  patchSub: string;
  patchFollow: string;
  closeTitle: string;
  footTerms: string;
  footTos: string;
  footPrivacy: string;
  footSupport: string;
  footDisc1: string;
  footDisc2: string;
  commands: CommandsPage;
}

export const dictionary: Record<Lang, Dictionary> = {
  ko: {
    navCommands: "명령어",
    hero1: "maimai DX 기록을,",
    hero2: "디스코드에서 바로.",
    sub: "캐롤봇으로 빠르게 마이마이 기록을 공유해보세요. 프로필, 레이팅 대상곡, 하루의 성과까지 슬래시 명령어 하나면 충분합니다.",
    cta1: "서버에 초대하기",
    cta2: "명령어 알아보기",
    ctaApp: "앱으로 추가하기",
    statUsers: "등록 사용자",
    statServers: "등록 서버",
    statVersion: "버전",
    uiKicker: "앱 추가",
    uiTitle: "서버에 봇이 없어도 괜찮습니다.",
    uiCopy:
      "디스코드의 '앱 추가'로 내 계정에 캐롤봇을 추가하면, 봇이 초대되지 않은 서버에서도 명령어를 그대로 사용할 수 있습니다.",
    featTitle: "캐롤봇이 하는 일",
    features: [
      {
        title: "/프로필",
        copy: "내 maimai DX 프로필을 임베드로 바로 표시합니다. 채팅 한 줄로 기록을 공유하세요.",
      },
      { title: "/레이팅표", copy: "레이팅 대상곡을 한 장의 이미지로 출력합니다." },
      {
        title: "/곡추천 · /랜덤",
        copy: "대상곡을 바탕으로 한 3곡 추천, 조건에 맞는 랜덤 선곡.",
      },
      { title: "/성과", copy: "특정 날짜에 이룬 성과를 이미지로 정리해 보여줍니다." },
      { title: "/검색", copy: "입력한 조건에 맞는 곡을 검색합니다." },
    ],
    featMore: "11개 명령어 전체 보기",
    patchTitle: "패치노트",
    patchSub: "새로운 소식은 X에서 가장 먼저 전해드립니다.",
    patchFollow: "@carolbot_maimai 팔로우",
    closeTitle: "지금 서버에 초대하세요.",
    footTerms: "약관 및 방침",
    footTos: "서비스 이용약관",
    footPrivacy: "개인정보 처리 방침",
    footSupport: "지원",
    footDisc1:
      "캐롤봇에서 사용되는 보면 상수와 앨범 자켓 이미지는 OTOGE DB 서비스에서 수집합니다. OTOGE DB를 제작하신 X @zvuc_ 님께 감사의 말씀을 드립니다.",
    footDisc2:
      "캐롤봇은 기록 공유의 편의를 위해 제작한 maimai DX의 팬 프로젝트입니다. 캐롤봇에 사용된 콘텐츠의 저작권은 SEGA 및 각 소유자들에게 있습니다.",
    commands: {
      title: "슬래시 명령어",
      sub: "캐롤봇이 제공하는 10개의 명령어입니다. 디스코드 채팅창에 / 를 입력해 사용하세요.",
      uiCopy:
        "디스코드의 '앱 추가'로 내 계정에 캐롤봇을 추가하면, 봇이 초대되지 않은 서버에서도 위 명령어를 그대로 사용할 수 있습니다.",
      back: "홈으로 돌아가기",
      groups: [
        {
          name: "시작하기",
          items: [
            { cmd: "/북마클릿", desc: "기록 연동에 필요한 북마클릿 등록 가이드 페이지로 이동합니다." },
            { cmd: "/설정", desc: "개인 설정 페이지로 이동합니다." },
          ],
        },
        {
          name: "기록",
          items: [
            { cmd: "/프로필", desc: "자신의 maimai DX 프로필을 임베드로 표시합니다." },
            { cmd: "/레이팅표", desc: "자신의 레이팅 대상곡을 이미지로 출력합니다." },
            { cmd: "/성과", desc: "특정 날짜에 이룬 성과를 이미지로 출력합니다." },
            { cmd: "/지방", desc: "자신의 지방별 진행도를 임베드로 표시합니다." },
            { cmd: "/검색", desc: "입력한 조건에 맞는 곡을 검색합니다." },
          ],
        },
        {
          name: "선곡",
          items: [
            { cmd: "/곡추천", desc: "레이팅 대상곡을 바탕으로 임의의 곡 3개를 추천합니다." },
            { cmd: "/랜덤", desc: "입력한 조건에 맞는 곡을 랜덤으로 선곡합니다." },
            { cmd: "/운세", desc: "사용자마다 다른 '오늘의 곡'을 임베드로 표시합니다. (14+ ~ 15)" },
          ],
        },
        {
          name: "지원",
          items: [{ cmd: "/문의", desc: "디스코드 팝업을 통해 버그를 제보할 수 있습니다." }],
        },
      ],
    },
  },
  en: {
    navCommands: "Commands",
    hero1: "maimai DX records,",
    hero2: "right in Discord.",
    sub: "Share your maimai records in seconds with Carolbot. Profile, rating frame, daily achievements — one slash command is all it takes.",
    cta1: "Add to Discord",
    cta2: "View commands",
    ctaApp: "Add as an app",
    statUsers: "Registered users",
    statServers: "Registered servers",
    statVersion: "Version",
    uiKicker: "User install",
    uiTitle: "No bot in the server? No problem.",
    uiCopy:
      "Add Carolbot to your own account with Discord’s “Add App” — then use its commands in any server, even ones the bot was never invited to.",
    featTitle: "What Carolbot does",
    features: [
      {
        title: "/프로필 — Profile",
        copy: "Shows your maimai DX profile as an embed. Share your records in one line of chat.",
      },
      {
        title: "/레이팅표 — Rating frame",
        copy: "Renders your rating songs as a single image.",
      },
      {
        title: "/곡추천 · /랜덤 — Picks",
        copy: "Three recommendations based on your rating songs, or a random song by your conditions.",
      },
      {
        title: "/성과 — Achievements",
        copy: "Summarizes the achievements of a given date as an image.",
      },
      { title: "/검색 — Search", copy: "Searches for songs matching your conditions." },
    ],
    featMore: "See all 11 commands",
    patchTitle: "Patch notes",
    patchSub: "News ships first on X.",
    patchFollow: "Follow @carolbot_maimai",
    closeTitle: "Invite Carolbot to your server.",
    footTerms: "Terms & Policies",
    footTos: "Terms of Service",
    footPrivacy: "Privacy Policy",
    footSupport: "Support",
    footDisc1:
      "Chart constants and jacket images used in Carolbot are sourced from the OTOGE DB service. Our thanks to X @zvuc_, the creator of OTOGE DB.",
    footDisc2:
      "Carolbot is a fan project built to make sharing maimai DX records easier. Copyright of the content used in Carolbot belongs to SEGA and the respective owners.",
    commands: {
      title: "Slash commands",
      sub: "All 10 commands Carolbot provides. Type / in any Discord chat to use them.",
      uiCopy:
        "Add Carolbot to your own account with Discord’s “Add App” — then use every command above in any server, even ones the bot was never invited to.",
      back: "Back to home",
      groups: [
        {
          name: "Getting started",
          items: [
            {
              cmd: "/북마클릿",
              desc: "Opens the guide page for registering the record-sync bookmarklet.",
            },
            { cmd: "/설정", desc: "Opens your personal settings page." },
          ],
        },
        {
          name: "Records",
          items: [
            { cmd: "/프로필", desc: "Shows your maimai DX profile as an embed." },
            { cmd: "/레이팅표", desc: "Renders your rating songs as an image." },
            { cmd: "/성과", desc: "Outputs the achievements of a given date as an image." },
            { cmd: "/지방", desc: "Shows your area progress as an embed." },
            { cmd: "/검색", desc: "Searches for songs matching your conditions." },
          ],
        },
        {
          name: "Song picks",
          items: [
            { cmd: "/곡추천", desc: "Recommends 3 random songs based on your rating songs." },
            { cmd: "/랜덤", desc: "Picks a random song matching your conditions." },
            {
              cmd: "/운세",
              desc: "Shows your personal “song of the day” as an embed. (Lv 14+ ~ 15)",
            },
          ],
        },
        {
          name: "Support",
          items: [{ cmd: "/문의", desc: "Report bugs through a Discord popup." }],
        },
      ],
    },
  },
  ja: {
    navCommands: "コマンド",
    hero1: "maimai DXの記録を、",
    hero2: "Discordでそのまま。",
    sub: "Carolbotで、maimaiの記録をすばやく共有。プロフィール、レーティング対象曲、日々の成果まで、スラッシュコマンドひとつで。",
    cta1: "サーバーに招待",
    cta2: "コマンド一覧",
    ctaApp: "アプリとして追加",
    statUsers: "登録ユーザー",
    statServers: "登録サーバー",
    statVersion: "バージョン",
    uiKicker: "アプリを追加",
    uiTitle: "サーバーにBotがなくても大丈夫。",
    uiCopy:
      "Discordの「アプリを追加」で自分のアカウントに追加すれば、Botのいないサーバーでもコマンドをそのまま使えます。",
    featTitle: "Carolbotの機能",
    features: [
      {
        title: "/프로필 — プロフィール",
        copy: "maimai DXのプロフィールを埋め込みで表示。ワンコマンドで記録を共有。",
      },
      {
        title: "/레이팅표 — レーティング表",
        copy: "レーティング対象曲を1枚の画像で出力します。",
      },
      {
        title: "/곡추천 · /랜덤 — 選曲",
        copy: "対象曲に基づく3曲のおすすめと、条件付きランダム選曲。",
      },
      { title: "/성과 — 成果", copy: "指定した日の成果を画像でまとめます。" },
      { title: "/검색 — 検索", copy: "条件に合う曲を検索します。" },
    ],
    featMore: "全11コマンドを見る",
    patchTitle: "パッチノート",
    patchSub: "最新情報はXでいち早くお届けします。",
    patchFollow: "@carolbot_maimai をフォロー",
    closeTitle: "サーバーに招待しよう。",
    footTerms: "規約及びポリシー",
    footTos: "利用規約",
    footPrivacy: "プライバシーポリシー",
    footSupport: "サポート",
    footDisc1:
      "Carolbotで使用される譜面定数やジャケット画像はOTOGE DBサービスから取得しています。OTOGE DBを制作されたX @zvuc_ 様に感謝申し上げます。",
    footDisc2:
      "Carolbotは記録共有の利便性のために制作したmaimai DXのファンプロジェクトです。Carolbotで使用されているコンテンツの著作権はSEGA及び各権利者に帰属します。",
    commands: {
      title: "スラッシュコマンド",
      sub: "Carolbotが提供する11のコマンドです。Discordのチャットで / を入力して使えます。",
      uiCopy:
        "Discordの「アプリを追加」で自分のアカウントに追加すれば、Botのいないサーバーでも上のコマンドをそのまま使えます。",
      back: "ホームへ戻る",
      groups: [
        {
          name: "はじめに",
          items: [
            { cmd: "/북마클릿", desc: "記録連携に必要なブックマークレット登録ガイドページを開きます。" },
            { cmd: "/설정", desc: "個人設定ページを開きます。" },
          ],
        },
        {
          name: "記録",
          items: [
            { cmd: "/프로필", desc: "自分のmaimai DXプロフィールを埋め込みで表示します。" },
            { cmd: "/레이팅표", desc: "レーティング対象曲を画像で出力します。" },
            { cmd: "/성과", desc: "指定した日の成果を画像で出力します。" },
            { cmd: "/지방", desc: "地方ごとの進行度を埋め込みで表示します。" },
            { cmd: "/검색", desc: "条件に合う曲を検索します。" },
          ],
        },
        {
          name: "選曲",
          items: [
            { cmd: "/곡추천", desc: "対象曲に基づいてランダムに3曲おすすめします。" },
            { cmd: "/랜덤", desc: "条件に合う曲をランダムに選曲します。" },
            { cmd: "/운세", desc: "ユーザーごとに異なる「今日の一曲」を表示します。（14+ ~ 15）" },
          ],
        },
        {
          name: "サポート",
          items: [{ cmd: "/문의", desc: "ポップアップからバグを報告できます。" }],
        },
      ],
    },
  },
};

// A patch-note entry. Sourced from Notion at request time (see lib/tweets.ts);
// the array below is the offline fallback used when Notion isn't configured.
export interface Tweet {
  date: string;
  text: string;
  images?: string[];
}

export const fallbackTweets: Tweet[] = [
  {
    date: "2026.07.02",
    text: "[업데이트] /운세 명령어가 추가되었습니다. 매일 나만의 ‘오늘의 곡’(14+ ~ 15)을 확인해 보세요.",
  },
  {
    date: "2026.06.18",
    text: "/레이팅표 이미지 출력 속도가 개선되었습니다. 신곡 프레임 표시 오류도 함께 수정했습니다.",
  },
  {
    date: "2026.06.03",
    text: "/지방 명령어가 새 지방 진행도를 지원합니다. 버그 제보는 /문의로 부탁드립니다.",
  },
];
