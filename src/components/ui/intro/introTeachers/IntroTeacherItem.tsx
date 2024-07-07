import Image from "next/image";

interface IIntroTeacherItem {
    src: string
    name: string
    description: string
}

export default function IntroTeacherItem(props: IIntroTeacherItem) {

    const { src, name, description } = props

    return (
        <div className="flex flex-col gap-6 basis-1/2 items-center onHover">
            <div className="relative">
                <Image
                    src={src}
                    alt={name}
                    width={500}
                    height={500}
                />
            </div>
            <h3 className="font-bold text-4xl">{name}</h3>
            <p className="text-2xl font-medium">{description}</p>
        </div>
    )
}