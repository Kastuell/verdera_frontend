import { Auth } from "@/components/auth/Auth";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function Page() {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <Auth />
    </Suspense>
  );
}
