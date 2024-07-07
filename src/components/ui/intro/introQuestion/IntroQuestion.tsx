import InvertButton from "../../global/buttons/InvertButton";
import IntroQuestionItem from "./IntroQuestionItem";

export default function IntroQuestion() {

    return (
        <div className="bg-primary py-20 text-secondary mt-32">
            <div className="container flex justify-between">
                <div className="flex flex-col gap-16">
                    <h2 className="text-7xl font-bold">У вас есть вопросы?</h2>
                    <p className="text-xl">Задавайте вопросы в нашем Telegram или VK</p>
                </div>
                <div className="flex flex-col basis-1/3 gap-8">
                    <InvertButton children={<IntroQuestionItem src="/images/svg/media/vk.svg" title="Vkontakte" />} />
                    <InvertButton theme="black" children={<IntroQuestionItem src="/images/svg/media/tg.svg" title="Telegram" />} />
                </div>
            </div>
        </div>
    )
}