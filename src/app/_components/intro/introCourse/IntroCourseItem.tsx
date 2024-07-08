interface IIntroCourseItem {
    title: string
    description: string
}

export default function IntroCourseItem(props: IIntroCourseItem) {

    const { title, description } = props

    return (
        <ul className="flex flex-col items-center gap-5">
            <h3 className="text-9xl font-bold text-greenish">{title}</h3>
            <p className="text-4xl">{description}</p>
        </ul>
    )
}