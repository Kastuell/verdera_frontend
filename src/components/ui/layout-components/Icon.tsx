import clsx from "clsx"
import Image from "next/image"

interface IIcon {
    isHeader: boolean
    src: string
    alt?: string
    pathName?: string
    title?: string
    size?: number
}

export default function Icon(props: IIcon) {

    const { isHeader, alt = "", src, pathName = "", size = 40, title = "" } = props

    return (
        <Image className={clsx({
            ['invert']: isHeader,
            ['invert-0']: pathName === '/' && isHeader
        })} src={src} width={size} height={size} alt={alt} title={title} />
    )
}