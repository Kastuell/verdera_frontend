"use client"
import clsx from "clsx"
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react"

interface ICustomInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    theme?: "white" | "black"
}

const CustomInput = forwardRef<HTMLInputElement, ICustomInput>((props: ICustomInput, ref) => {

    const { className, theme = "black", ...rest } = props

    return <input className={clsx({
        [`block text-2xl border-[3px] outline-none py-9 px-8 w-full ${className}`]: true,
        ['border-primary']: theme === "black",
        ['border-secondary']: theme === "white",
    })} ref={ref}
        {...rest} />
})

export default CustomInput