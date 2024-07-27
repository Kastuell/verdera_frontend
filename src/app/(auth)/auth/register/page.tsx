import { Metadata } from "next";
import Register from "../../_components/Register";

export const metadata: Metadata = {
  title: "Регистрация",
};

export default function Page() {
  return <Register />;
}
