import clsx from "clsx";
import Image from "next/image";

interface ILogo {
    pathName?: string
}

export default function Logo(props: ILogo) {

    const { pathName = "/" } = props

    return (
        <Image
            className={clsx({
                ['invert']: true,
                ['invert-0']: pathName === '/'
            })}
            src={'/images/svg/logo.svg'}
            alt="logo"
            width={245}
            height={100}
        />
    )
}