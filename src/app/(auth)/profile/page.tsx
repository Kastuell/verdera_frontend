import { Metadata } from "next";
import Profile from "../_components/Profile";

export const metadata: Metadata = {
  title: "Профиль",
};

export default function Page() {
  return <Profile />;
}
