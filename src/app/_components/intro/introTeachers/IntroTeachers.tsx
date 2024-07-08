import IntroHead from "../IntroHead";
import IntroTeacherItem from "./IntroTeacherItem";

export default function IntroTeahers() {

    const IntroTeacherItems = [
        { src: "/images/png/teacher1.png", name: "Анастасия Лютер", description: "Врач-косметолог “Cosmetic Service”" },
        { src: "/images/png/teacher2.png", name: "Зулейха Сурхаева", description: "Врач-косметолог “Cosmetic Service”" },
    ]

    return (
        <div>
            <IntroHead title="Преподаватели" />
            <div className="container mt-32">
                <ul className="flex justify-between">
                    {IntroTeacherItems.map(item => <IntroTeacherItem key={item.src} src={item.src} name={item.name} description={item.description} />)}
                </ul>
            </div>
        </div>
    )
}