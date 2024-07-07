import Head from "../global/Head";

export default function IntroHead({ title }: { title: string }) {
    return <div className="w-full border-y-4 border-primary py-10"><Head>{title}</Head></div>
}