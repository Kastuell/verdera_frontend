interface IIntroProductItem {
    title: string
    description: string
}

export default function IntroProductItem(props: IIntroProductItem) {

    const { title, description } = props

    return (
        <div className="relative">
            <h3 className="text-3xl font-bold">{title}</h3>
            <div className="w-2/5 h-1 bg-greenish my-7" />
            <p className="text-2xl leading-[32px]">
                {description}
            </p>
        </div>
    )
}