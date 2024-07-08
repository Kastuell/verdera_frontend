import { Metadata } from "next";
import AboutItem from "./_components/AboutItem";
import { AboutItems } from "./about-items";

export const metadata: Metadata = {
    title: "Verdera | О нас",
    description: "Стираем вероятность ошибки",
};


export default function Page() {

    return (
        <div className="container grid grid-cols-2 gap-2 justify-between mt-32">
            {AboutItems.map((item, index) => <AboutItem
                title={item.title}
                description={item.description}
                className={item.className}
                key={index}
                number={item.number}
                numberCn={item.numberCn}
                titleCn={item.titleCn}
                src={item.src} />)}
        </div>
    )
}