import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const footerItems = {
    center: [
      { title: "+ 7 984 149-43-69", href: "tel:+79841494369" },
      { title: "ИП Петухов А.И", href: "" },
      { title: "verdera@internet.ru", href: "mailto:verdera@internet.ru" },
      { title: "ИНН: 490913669400", href: "" },
      { title: "г. Владивосток, Ульяновская 6", href: "" },
    ],
    right: [
      {
        src: "/images/svg/media/vk.svg",
        alt: "VK",
        href: "https://vk.com/verdera_cosmetology",
      },
      { src: "/images/svg/media/whatsapp.svg", alt: "What's App", href: "q" },
      {
        src: "/images/svg/media/tg.svg",
        alt: "TG",
        href: "https://t.me/verdera_cosmetology",
      },
    ],
  };

  return (
    <footer className="bg-primary text-secondary text-lg xl:text-4xl xl:mt-32 mt-10">
      <div className="container flex flex-col md:flex-row justify-between items-center xl:py-20 py-10">
        <Link href="/" className="onClick_onHover ">
          {/* <Logo sizes="w-[150px] md:w-[250px] xl:w-[250px] h-[100px]" long /> */}
          <Image
            className=""
            alt=""
            src={"/images/svg/logo_height_white.svg"}
            width={185}
            height={180}
          />
        </Link>
        <div className="flex flex-col gap-12 items-center mt-10 md:mt-0">
          {footerItems.center.map((item) => (
            <p key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </p>
          ))}
        </div>
        <div className="flex flex-col xl:gap-16 gap-7 items-center mt-10 md:mt-0">
          <p>© Verdera2024</p>
          <ul className="flex xl:gap-12 gap-6 items-center">
            {footerItems.right.map((item) => (
              <Link key={item.href} href={item.href} target="_blank">
                <div className="relative xl:w-[70px] w-[50px] h-[70px]">
                  <Image fill src={item.src} alt={item.alt} />
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
