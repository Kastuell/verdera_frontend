"use client"
import clsx from "clsx"
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react"

interface ICustomInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

const CustomInput = forwardRef<HTMLInputElement, ICustomInput>((props: ICustomInput, ref) => {

    const { className, ...rest } = props

    return <input className={clsx({
        [`${className} block text-2xl border-[3px] border-black py-9 px-8 w-full`]: true
    })} ref={ref}
        {...rest} />
})

export default CustomInput