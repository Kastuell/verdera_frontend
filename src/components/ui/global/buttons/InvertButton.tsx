import clsx from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface IInvertButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    theme?: "black" | "white"
}

export default function InvertButton(props: IInvertButton) {

    const { theme = "white", className, children, ...rest } = props

    return <button className={clsx({
        [`block mx-auto text-2xl w-full text-center onInvertHover ${className}`]: true,
        ['bg-secondary text-primary border-2 border-primary']: theme == "white",
        ['bg-primary border-2 border-secondary']: theme == "black",
    })}>{children}</button>
}