import clsx from "clsx"

interface IUnderlineText {
    className?: string
    color?: string
    children?: React.ReactNode
}

export default function UnderlineText(props: IUnderlineText) {

    const { className, color = "bg-primary", children } = props

    return (
        <div className={clsx({
            [`group transition duration-300 ${className}`]: true,
        })}>
            {children}
            <span className={clsx({
                [`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.9px] ${color}`]: true,
            })} />
        </div>
    )
}