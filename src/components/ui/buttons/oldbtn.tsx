import clsx from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface ICustomButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    theme?: "salad" | "black" | "white"
    transparent?: boolean
    size?: "micro" | "normal"

}

export default function QW(props: ICustomButton) {


    const { size = "normal", transparent = false, theme = "salad", className, children, ...rest } = props

    return <button className={clsx({
        [`block mx-auto text-2xl ${className}`]: true,
        ['w-full py-5 onClick_onHover']: size !== "micro",
        ['bg-greenish border-[3px] border-greenish text-black']: theme === 'salad',
        ['bg-transparent onClick_onHover_transparent']: transparent,
        ['w-1/4 py-4']: size === "micro",

    })} {...rest}>{children}</button>
}