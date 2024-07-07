import Image from "next/image";
import intro from "../../../../../public/images/jpg/intro.jpg";

export default function IntroImage() {
    // return <div className="bg-introDesktop min-w-full min-h- bg-cover bg-no-repeat" />
    return <Image className="w-full" src={intro} alt="" />
}