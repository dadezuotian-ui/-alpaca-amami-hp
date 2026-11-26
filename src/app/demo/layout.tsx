import { notFound } from "next/navigation";

// 旧方針のデモ（/demo/*）は非公開（2026-11-26）。各ページのソースは残してある。戻す時は git の履歴からこのファイルを戻す
// この layout は demo/loading.tsx より外側なので、ここで返せば HTTP 404 になる
export default function DemoLayout(): never {
  notFound();
}
