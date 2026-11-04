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
        copy: "내 maimai DX 프로필을 이미지 카드로 바로 보여줍니다. 채팅 한 줄로 기록을 공유하세요.",
      },
      { title: "/레이팅표", copy: "레이팅 대상곡을 한 장의 이미지로 출력합니다." },
      {
        title: "/곡추천 · /랜덤",
        copy: "같은 레이팅대 기록을 바탕으로 한 3곡 추천, 조건에 맞는 랜덤 선곡.",
      },
      { title: "/성과", copy: "특정 날짜에 이룬 성과를 이미지로 정리해 보여줍니다." },
      { title: "/검색", copy: "입력한 조건에 맞는 곡을 검색합니다." },
    ],
    featMore: "26개 명령어 전체 보기",
    patchTitle: "패치노트",
    patchSub: "새로운 소식은 X에서 가장 먼저 전해드립니다.",
    patchFollow: "@carolbot_maimai 팔로우",
    closeTitle: "지금 서버에 초대하세요.",
    footTerms: "약관 및 방침",
    footTos: "서비스 이용약관",
    footPrivacy: "개인정보 처리 방침",
    footSupport: "지원",
    footDisc1:
      "캐롤봇의 플레이 기록, 곡 정보, 보면 상수와 앨범 재킷 이미지는 maishift(maimai.shiftpsh.com)의 공식 API에서 받습니다. 캐롤봇은 maishift가 운영하는 서비스가 아닙니다.",
    footDisc2:
      "캐롤봇은 기록 공유의 편의를 위해 제작한 maimai DX의 비공식 팬 프로젝트로, SEGA와 관계가 없습니다. 캐롤봇에 사용된 콘텐츠의 저작권은 SEGA 및 각 소유자들에게 있습니다.",
    commands: {
      title: "슬래시 명령어",
      sub: "캐롤봇이 제공하는 26개의 명령어입니다. 디스코드 채팅창에 / 를 입력해 사용하세요.",
      uiCopy:
        "디스코드의 '앱 추가'로 내 계정에 캐롤봇을 추가하면, 봇이 초대되지 않은 서버에서도 위 명령어를 그대로 사용할 수 있습니다.",
      back: "홈으로 돌아가기",
      groups: [
        {
          name: "시작하기",
          items: [
            {
              cmd: "/마이시프트 연동",
              desc: "maishift 아이디를 연동합니다. 캐롤봇의 프로필과 기록은 maishift에서 불러옵니다.",
            },
            {
              cmd: "/마이시프트 해제",
              desc: "maishift 연동을 해제하고 maishift 기록으로 만든 성과를 삭제합니다.",
            },
            {
              cmd: "/북마클릿",
              desc: "서클·지방·게임 설정을 불러오는 캐롤봇 추가 북마클릿의 설치 가이드 페이지로 이동합니다.",
            },
            { cmd: "/설정", desc: "개인 설정 페이지로 이동합니다." },
          ],
        },
        {
          name: "기록",
          items: [
            {
              cmd: "/프로필",
              desc: "자신의 maimai DX 프로필을 이미지 카드로 표시합니다(임베드도 선택 가능). maishift 이용자 중 레이팅 상위 몇 %인지도 함께 보여줍니다.",
            },
            {
              cmd: "/레이팅표",
              desc: "자신의 레이팅 대상곡을 이미지로 출력합니다. 날짜를 고르면 그때의 레이팅표를 볼 수 있습니다.",
            },
            { cmd: "/히스토리", desc: "레이팅 변화를 그래프 이미지로 출력합니다. 기간을 고를 수 있습니다." },
            { cmd: "/성과", desc: "특정 날짜에 이룬 성과를 이미지로 출력합니다." },
            {
              cmd: "/플레이트",
              desc: "버전 플레이트(極·将·神·舞舞·覇者) 진행도를 이미지로 출력합니다. 버전을 고르면 남은 보면과 같은 레이팅대 기준 예상 플레이 수를 보여줍니다.",
            },
            {
              cmd: "/플레이리스트",
              desc: "maishift 공개 플레이리스트의 보면과 자신의 기록을 한 장의 이미지로 출력합니다.",
            },
            {
              cmd: "/사진관",
              desc: "프로필·레이팅표·히스토리·성과·서클 이미지를 한곳에서 골라 만들고 채널에 올립니다.",
            },
          ],
        },
        {
          name: "추가 북마클릿",
          items: [
            { cmd: "/서클", desc: "자신이 속한 서클의 정보를 이미지 카드로 표시합니다." },
            { cmd: "/지방", desc: "자신의 지방별 진행도를 임베드로 표시합니다." },
            { cmd: "/게임설정", desc: "maimai 게임 옵션과 옵션 프리셋 페이지를 안내합니다." },
          ],
        },
        {
          name: "곡·보면",
          items: [
            { cmd: "/검색", desc: "곡을 검색해 자신의 기록과 함께 보여줍니다." },
            {
              cmd: "/보면",
              desc: "보면을 미리보기와 웹 플레이어로 재생합니다. 곡명으로 찾거나 simai 파일(maidata.txt)을 올릴 수 있습니다.",
            },
            { cmd: "/레이팅계산기", desc: "상수와 달성률로 곡 레이팅과 총합 레이팅 변화를 계산합니다." },
          ],
        },
        {
          name: "선곡",
          items: [
            {
              cmd: "/곡추천",
              desc: "같은 레이팅대가 흔히 달성한 곡을 우선해 3곡을 추천합니다. '레벨'·'기준'을 고르면 그 레벨을 비슷하게 깬 사람들이 많이 깬 곡 중 아직 못 깬 곡을 추천합니다.",
            },
            {
              cmd: "/랜덤",
              desc: "입력한 조건에 맞는 곡을 랜덤으로 선곡합니다. maishift 플레이리스트 안에서도 뽑을 수 있습니다.",
            },
            { cmd: "/운세", desc: "사용자마다 다른 '오늘의 곡'을 임베드로 표시합니다. (14+ ~ 15)" },
          ],
        },
        {
          name: "목표",
          items: [
            { cmd: "/목표 추가", desc: "여러 유형의 목표를 세울 수 있습니다." },
            { cmd: "/목표 삭제", desc: "특정 목표를 삭제할 수 있습니다." },
            { cmd: "/목표 목록", desc: "자신이 세운 목표와 달성률을 확인할 수 있습니다." },
          ],
        },
        {
          name: "서버·지원",
          items: [
            { cmd: "/공지설정", desc: "maimai 공식 공지를 올릴 채널을 정합니다. (서버 관리 권한 필요)" },
            { cmd: "/상태", desc: "봇과 서버 상태를 확인합니다." },
            {
              cmd: "/문의",
              desc: "디스코드 팝업으로 버그 제보와 문의를 남길 수 있습니다. 메시지 메뉴의 '이슈로 등록'으로도 보낼 수 있습니다.",
            },
          ],
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
        copy: "Shows your maimai DX profile as an image card. Share your records in one line of chat.",
      },
      {
        title: "/레이팅표 — Rating frame",
        copy: "Renders your rating songs as a single image.",
      },
      {
        title: "/곡추천 · /랜덤 — Picks",
        copy: "Three picks based on what players at your rating clear, or a random song by your conditions.",
      },
      {
        title: "/성과 — Achievements",
        copy: "Summarizes the achievements of a given date as an image.",
      },
      { title: "/검색 — Search", copy: "Searches for songs matching your conditions." },
    ],
    featMore: "See all 26 commands",
    patchTitle: "Patch notes",
    patchSub: "News ships first on X.",
    patchFollow: "Follow @carolbot_maimai",
    closeTitle: "Invite Carolbot to your server.",
    footTerms: "Terms & Policies",
    footTos: "Terms of Service",
    footPrivacy: "Privacy Policy",
    footSupport: "Support",
    footDisc1:
      "Carolbot’s play records, song data, chart constants and jacket images come from the official maishift (maimai.shiftpsh.com) API. Carolbot is not a service run by maishift.",
    footDisc2:
      "Carolbot is an unofficial fan project built to make sharing maimai DX records easier and is not affiliated with SEGA. Copyright of the content used in Carolbot belongs to SEGA and the respective owners.",
    commands: {
      title: "Slash commands",
      sub: "All 26 commands Carolbot provides. Type / in any Discord chat to use them.",
      uiCopy:
        "Add Carolbot to your own account with Discord’s “Add App” — then use every command above in any server, even ones the bot was never invited to.",
      back: "Back to home",
      groups: [
        {
          name: "Getting started",
          items: [
            {
              cmd: "/마이시프트 연동",
              desc: "Links your maishift ID. Carolbot loads your profile and records from maishift.",
            },
            {
              cmd: "/마이시프트 해제",
              desc: "Unlinks maishift and deletes the achievements made from your maishift records.",
            },
            {
              cmd: "/북마클릿",
              desc: "Opens the install guide for the Carolbot extra bookmarklet, which brings in your circle, areas and game settings.",
            },
            { cmd: "/설정", desc: "Opens your personal settings page." },
          ],
        },
        {
          name: "Records",
          items: [
            {
              cmd: "/프로필",
              desc: "Shows your maimai DX profile as an image card (or an embed), along with your rating’s top % among maishift users.",
            },
            {
              cmd: "/레이팅표",
              desc: "Renders your rating songs as an image. Pick a date to see your rating songs from back then.",
            },
            {
              cmd: "/히스토리",
              desc: "Renders your rating history as a graph image for the period you choose.",
            },
            { cmd: "/성과", desc: "Outputs the achievements of a given date as an image." },
            {
              cmd: "/플레이트",
              desc: "Renders your version plate (極·将·神·舞舞·覇者) progress as an image. Pick a version to see the charts left and estimated plays for players at your rating.",
            },
            {
              cmd: "/플레이리스트",
              desc: "Renders a public maishift playlist’s charts with your records as a single image.",
            },
            {
              cmd: "/사진관",
              desc: "Make profile, rating, history, achievement and circle images in one place and post them to the channel.",
            },
          ],
        },
        {
          name: "Extra bookmarklet",
          items: [
            { cmd: "/서클", desc: "Shows the circle you belong to as an image card." },
            { cmd: "/지방", desc: "Shows your area progress as an embed." },
            { cmd: "/게임설정", desc: "Opens the page for your maimai game options and option presets." },
          ],
        },
        {
          name: "Songs & charts",
          items: [
            { cmd: "/검색", desc: "Searches for songs and shows them with your records." },
            {
              cmd: "/보면",
              desc: "Plays a chart as a preview and in the web player. Find it by song name or upload a simai file (maidata.txt).",
            },
            {
              cmd: "/레이팅계산기",
              desc: "Calculates a song’s rating and your total rating change from a chart constant and an achievement rate.",
            },
          ],
        },
        {
          name: "Song picks",
          items: [
            {
              cmd: "/곡추천",
              desc: "Recommends 3 songs, favoring ones players at your rating commonly clear. Pick a level and criterion to get songs you haven’t cleared yet that players with similar clears at that level often have.",
            },
            {
              cmd: "/랜덤",
              desc: "Picks a random song matching your conditions. You can also draw from a maishift playlist.",
            },
            {
              cmd: "/운세",
              desc: "Shows your personal “song of the day” as an embed. (Lv 14+ ~ 15)",
            },
          ],
        },
        {
          name: "Goals",
          items: [
            { cmd: "/목표 추가", desc: "Set goals of several different types." },
            { cmd: "/목표 삭제", desc: "Delete a specific goal." },
            { cmd: "/목표 목록", desc: "Check the goals you set and how far along they are." },
          ],
        },
        {
          name: "Server & support",
          items: [
            {
              cmd: "/공지설정",
              desc: "Sets the channel for official maimai news. (Requires Manage Server)",
            },
            { cmd: "/상태", desc: "Checks the bot and server status." },
            {
              cmd: "/문의",
              desc: "Report bugs or send questions through a Discord popup, or from a message’s “이슈로 등록” menu.",
            },
          ],
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
        copy: "maimai DXのプロフィールをカード画像で表示。ワンコマンドで記録を共有。",
      },
      {
        title: "/레이팅표 — レーティング表",
        copy: "レーティング対象曲を1枚の画像で出力します。",
      },
      {
        title: "/곡추천 · /랜덤 — 選曲",
        copy: "同じレーティング帯の記録に基づく3曲のおすすめと、条件付きランダム選曲。",
      },
      { title: "/성과 — 成果", copy: "指定した日の成果を画像でまとめます。" },
      { title: "/검색 — 検索", copy: "条件に合う曲を検索します。" },
    ],
    featMore: "全26コマンドを見る",
    patchTitle: "パッチノート",
    patchSub: "最新情報はXでいち早くお届けします。",
    patchFollow: "@carolbot_maimai をフォロー",
    closeTitle: "サーバーに招待しよう。",
    footTerms: "規約及びポリシー",
    footTos: "利用規約",
    footPrivacy: "プライバシーポリシー",
    footSupport: "サポート",
    footDisc1:
      "Carolbotのプレイ記録・楽曲情報・譜面定数・ジャケット画像はmaishift（maimai.shiftpsh.com）の公式APIから取得しています。Carolbotはmaishiftが運営するサービスではありません。",
    footDisc2:
      "Carolbotは記録共有の利便性のために制作したmaimai DXの非公式ファンプロジェクトであり、SEGAとは関係ありません。Carolbotで使用されているコンテンツの著作権はSEGA及び各権利者に帰属します。",
    commands: {
      title: "スラッシュコマンド",
      sub: "Carolbotが提供する26のコマンドです。Discordのチャットで / を入力して使えます。",
      uiCopy:
        "Discordの「アプリを追加」で自分のアカウントに追加すれば、Botのいないサーバーでも上のコマンドをそのまま使えます。",
      back: "ホームへ戻る",
      groups: [
        {
          name: "はじめに",
          items: [
            {
              cmd: "/마이시프트 연동",
              desc: "maishiftのIDを連携します。プロフィールと記録はmaishiftから読み込みます。",
            },
            {
              cmd: "/마이시프트 해제",
              desc: "maishiftの連携を解除し、maishiftの記録から作った成果を削除します。",
            },
            {
              cmd: "/북마클릿",
              desc: "サークル・地方・ゲーム設定を読み込むCarolbot追加ブックマークレットの導入ガイドページを開きます。",
            },
            { cmd: "/설정", desc: "個人設定ページを開きます。" },
          ],
        },
        {
          name: "記録",
          items: [
            {
              cmd: "/프로필",
              desc: "自分のmaimai DXプロフィールをカード画像で表示します（埋め込みも選べます）。maishift利用者の中でのレーティング上位%も表示します。",
            },
            {
              cmd: "/레이팅표",
              desc: "レーティング対象曲を画像で出力します。日付を選ぶとその時点の対象曲を見られます。",
            },
            { cmd: "/히스토리", desc: "レーティングの推移をグラフ画像で出力します。期間を選べます。" },
            { cmd: "/성과", desc: "指定した日の成果を画像で出力します。" },
            {
              cmd: "/플레이트",
              desc: "バージョンプレート（極・将・神・舞舞・覇者）の進行度を画像で出力します。バージョンを選ぶと、残りの譜面と同じレーティング帯での予想プレイ回数を表示します。",
            },
            {
              cmd: "/플레이리스트",
              desc: "maishiftの公開プレイリストの譜面と自分の記録を1枚の画像で出力します。",
            },
            {
              cmd: "/사진관",
              desc: "プロフィール・レーティング表・ヒストリー・成果・サークルの画像をまとめて作り、チャンネルに投稿します。",
            },
          ],
        },
        {
          name: "追加ブックマークレット",
          items: [
            { cmd: "/서클", desc: "所属しているサークルの情報をカード画像で表示します。" },
            { cmd: "/지방", desc: "地方ごとの進行度を埋め込みで表示します。" },
            { cmd: "/게임설정", desc: "maimaiのゲームオプションとオプションプリセットのページを案内します。" },
          ],
        },
        {
          name: "曲・譜面",
          items: [
            { cmd: "/검색", desc: "曲を検索し、自分の記録と一緒に表示します。" },
            {
              cmd: "/보면",
              desc: "譜面をプレビューとWebプレイヤーで再生します。曲名で探すか、simaiファイル（maidata.txt）をアップロードできます。",
            },
            {
              cmd: "/레이팅계산기",
              desc: "譜面定数と達成率から、曲のレーティングと合計レーティングの変化を計算します。",
            },
          ],
        },
        {
          name: "選曲",
          items: [
            {
              cmd: "/곡추천",
              desc: "同じレーティング帯でよく達成されている曲を優先して3曲おすすめします。「レベル」「基準」を選ぶと、そのレベルを同じくらいクリアした人が多くクリアしている未クリアの曲をおすすめします。",
            },
            {
              cmd: "/랜덤",
              desc: "条件に合う曲をランダムに選曲します。maishiftのプレイリストの中から選ぶこともできます。",
            },
            { cmd: "/운세", desc: "ユーザーごとに異なる「今日の一曲」を表示します。（14+ ~ 15）" },
          ],
        },
        {
          name: "目標",
          items: [
            { cmd: "/목표 추가", desc: "さまざまな種類の目標を設定できます。" },
            { cmd: "/목표 삭제", desc: "特定の目標を削除できます。" },
            { cmd: "/목표 목록", desc: "自分が立てた目標と達成率を確認できます。" },
          ],
        },
        {
          name: "サーバー・サポート",
          items: [
            {
              cmd: "/공지설정",
              desc: "maimai公式のお知らせを投稿するチャンネルを設定します。（サーバー管理権限が必要）",
            },
            { cmd: "/상태", desc: "Botとサーバーの状態を確認します。" },
            {
              cmd: "/문의",
              desc: "ポップアップからバグ報告や問い合わせができます。メッセージメニューの「이슈로 등록」からも送れます。",
            },
          ],
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
  url?: string;
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
