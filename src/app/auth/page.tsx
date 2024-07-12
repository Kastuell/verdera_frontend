import { Metadata } from "next";
import Auth from "./_components/Auth";

export const metadata: Metadata = {
	title: 'Авторизация',
}


export default function Page() {
    return <Auth />
}