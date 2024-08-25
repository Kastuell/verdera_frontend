import { Result } from "@/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <Result />
    </Suspense>
  );
}
