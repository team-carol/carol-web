import type { Metadata } from "next";
import { CommandsIntro } from "@/components/CommandsIntro";
import { CommandGroups } from "@/components/CommandGroups";
import { CommandsInstall } from "@/components/CommandsInstall";

export const metadata: Metadata = {
  title: "명령어 — 캐롤봇",
  description:
    "캐롤봇이 제공하는 슬래시 명령어 목록입니다. 디스코드 채팅창에 / 를 입력해 사용하세요.",
};

export default function CommandsPage() {
  return (
    <>
      <CommandsIntro />
      <CommandGroups />
      <CommandsInstall />
    </>
  );
}
