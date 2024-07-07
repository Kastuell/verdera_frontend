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
            [`rounded-3xl p-7 basis-[49.5%] flex flex-col gap-4 font-[320] mt-3 ${className}`]: true,
        })}>
            {number && <div className={`rounded-2xl bg-secondary text-primary w-14 text-center text-xl font-semibold ${numberCn}`}>{number}</div>}
            {title && <h3 className={`font-bold text-3xl ${titleCn}`}>{title}</h3>}
            {description && <p className="text-2xl  leading-[45px]">{description}</p>}
            {src && <div className="relative w-full h-full">
                <Image src={"/images/svg/logo_big.svg"} alt="" fill />
            </div>}
        </div>
    )
}