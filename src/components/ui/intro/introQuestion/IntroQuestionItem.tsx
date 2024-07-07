import clsx from "clsx";
import Image from "next/image";

interface IIntroQuestionItem {
    src: string
    title: string
    className?: string
}

export default function IntroQuestionItem(props: IIntroQuestionItem) {

    const { className, src, title } = props

    return (
        <div className="flex justify-center items-center gap-5 h-24">
            <Image className={clsx({
                ["invert"]: src.includes('vk')
            })} src={src} width={80} height={80} alt="" />
            <span className="font-thin text-3xl">{title}</span>
        </div>
    )
}