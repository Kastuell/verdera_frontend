import { Register } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация",
};

export default function Page() {
  return <Register />;
}
