import { Profile } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Профиль",
};

export default function Page() {
  return <Profile />;
}
