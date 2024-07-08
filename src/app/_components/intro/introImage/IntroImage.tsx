import Image from "next/image";

export default function IntroImage() {
    // return <div className="bg-introDesktop min-w-full min-h- bg-cover bg-no-repeat" />
    return <Image
        className="w-full"
        src={"/images/jpg/intro.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} />
}