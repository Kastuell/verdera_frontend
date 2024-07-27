import { Metadata } from "next";
import Login from "../../_components/Login";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function Page() {
  return <Login />;
}
