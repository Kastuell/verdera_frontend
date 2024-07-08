import clsx from "clsx";
import Image from "next/image";

interface IAboutItem {
    number?: string
    className?: string
    numberCn?: string
    titleCn?: string
    title?: string
    description?: string
    src: string
}

export default function AboutItem(props: IAboutItem) {

    const { number, description, title, className, numberCn, titleCn, src } = props

    return (
        <div className={clsx({
            [`rounded-3xl p-7 h-[500px] w-full flex flex-col gap-4 font-[320] mt-3 ${className}`]: true,
            ['col-span-2']: title === "Миссия"
        })}>
            {number && <div className={`rounded-2xl bg-secondary text-primary w-14 text-center text-xl font-semibold ${numberCn}`}>{number}</div>}
            {title && <h3 className={`font-bold text-4xl ${titleCn}`}>{title}</h3>}
            {description && <p className="text-3xl leading-[45px]">{description}</p>}
            {src && <div className="relative w-full h-full">
                <Image src={"/images/svg/logo_big.svg"} alt="" fill />
            </div>}
        </div>
    )
}