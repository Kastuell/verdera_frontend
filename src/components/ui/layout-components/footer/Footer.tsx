import Link from "next/link";
import Icon from "../Icon";
import Logo from "../Logo";
import NavItem from "../NavItem";

export default function Footer() {

    const footerItems = {
        center: [
            { title: "+ 7 984 149-43-69" },
            { title: "г. Владивосток, Ульяновская 6" },
            { title: "ИП Петухов А.И" },
        ],
        right: [
            { src: "/images/svg/media/vk.svg", alt: "VK", href: "" },
            { src: "/images/svg/media/whatsapp.svg", alt: "What's App", href: "" },
            { src: "/images/svg/media/tg.svg", alt: "TG", href: "" },
        ]
    }

    return (
        <footer className="bg-primary text-secondary text-4xl mt-32">
            <div className="container flex justify-between py-20">
                <Link href="/" className="onClick_onHover self-start">
                    <Logo />
                </Link>
                <div className="flex flex-col gap-16 items-center">
                    {footerItems.center.map(item => <a className="cursor-pointer onClick_onHover" key={item.title}>{item.title}</a>)}
                </div>
                <div className="flex flex-col gap-16 items-center">
                    <p>©Verdera2024</p>
                    <ul className="flex gap-12 items-center">
                        {footerItems.right.map(item => <NavItem
                            className=" onClick_onHover"
                            key={item.href}
                            href={item.href}
                            children={<Icon
                                src={item.src}
                                isHeader={false}
                                alt={item.alt}
                                title={item.alt}
                                size={70} />}
                        />)}
                    </ul>
                </div>
            </div>
        </footer>
    )
}