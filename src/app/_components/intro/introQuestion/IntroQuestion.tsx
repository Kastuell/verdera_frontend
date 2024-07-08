import IntroQuestionItem from "./IntroQuestionItem";

export default function IntroQuestion() {

    return (
        <div className="bg-primary py-20 text-secondary mt-32">
            <div className="container flex justify-between flex-wrap">
                <div className="flex flex-col gap-16">
                    <h2 className="text-7xl font-bold">У вас есть вопросы?</h2>
                    <p className="text-xl">Задавайте вопросы в нашем Telegram или VK</p>
                </div>
                <div className="flex flex-col basis-1/3 gap-8">
                    <IntroQuestionItem src="/images/svg/media/vk.svg" title="Vkontakte" className="bg-secondary text-primary border-2 border-secondary" />
                    <IntroQuestionItem src="/images/svg/media/tg.svg" title="Telegram"className="border-2 border-secondary bg-primary" />
                </div>
            </div>
        </div>
    )
}