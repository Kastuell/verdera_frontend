import clsx from "clsx"

interface IHead {
    children: string,
    center?: boolean
}

export default function Head(props: IHead) {

    const { children, center = true } = props

    return (
        <h3 className={clsx({
            ["font-bold text-5xl"]: true,
            ['text-center']: center
        })}>
            {children}
        </h3>
    )
}