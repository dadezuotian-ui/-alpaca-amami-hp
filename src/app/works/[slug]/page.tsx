import { notFound } from "next/navigation";

// 旧方針の実績ページは非公開（2026-11-26）。戻す時は git の履歴からこのファイルを戻す
export default function WorkPage(): never {
  notFound();
}
