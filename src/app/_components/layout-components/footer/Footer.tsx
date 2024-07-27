import Link from "next/link";
import Icon from "../Icon";
import Logo from "../Logo";

export default function Footer() {
  const footerItems = {
    center: [
      { title: "+ 7 984 149-43-69", href: "tel:+79841494369" },
      { title: "ИП Петухов А.И", href: "" },
      { title: "verdera@internet.ru", href: "mailto:verdera@internet.ru" },
      { title: "ИНН: 490913669400", href: "" },
      { title: "г. Владивосток, Ульяновская 6", href: "" },
    ],
    right: [
      { src: "/images/svg/media/vk.svg", alt: "VK", href: "https://vk.com/verdera_cosmetology" },
      { src: "/images/svg/media/whatsapp.svg", alt: "What's App", href: "q" },
      { src: "/images/svg/media/tg.svg", alt: "TG", href: "" },
    ],
  };

  return (
    <footer className="bg-primary text-secondary text-4xl mt-32">
      <div className="container flex justify-between py-20">
        <Link href="/" className="onClick_onHover self-start">
          <Logo isFooter={true} />
        </Link>
        <div className="flex flex-col gap-12 items-center">
          {footerItems.center.map((item) => (
            <p key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-16 items-center">
          <p>©Verdera2024</p>
          <ul className="flex gap-12 items-center">
            {footerItems.right.map((item) => (
              <Icon
                key={item.href}
                src={item.src}
                isHeader={false}
                alt={item.alt}
                title={item.alt}
                size={70}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
