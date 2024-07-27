import { Login } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function Page() {
  return <Login />;
}
