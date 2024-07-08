import CustomButton from "@/components/ui/buttons/CustomButton";
import IntroHead from "../IntroHead";
import IntroCourseItem from "./IntroCourseItem";

export default function IntroCourse() {

    const introCourseItems = [
        { title: "8", description: "Лекций" },
        { title: "30", description: "Часов обучения" },
        { title: "180+", description: "Проколов" },
        { title: "∞", description: "Полученного опыта" },
    ]

    return (
        <div className="mt-32">
            <IntroHead title="Курс по обучению контурной пластики губ" />
            <div className="container mt-32">
                <ul className="flex justify-between py-16">
                    {introCourseItems.map(item => <IntroCourseItem key={item.title} title={item.title} description={item.description} />)}
                </ul>
                <CustomButton className="mt-24" size="micro" theme="salad" transparent children="Подробнее о курсе" />
            </div>
        </div>
    )
}