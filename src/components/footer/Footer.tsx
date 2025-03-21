import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const footerItems = {
    center: [
      { title: "+ 7 995 280-67-07", href: "tel:+79952806707" },
      { title: "ИП Петухов АИ", href: "" },
      { title: "verdera@internet.ru", href: "mailto:verdera@internet.ru" },
      { title: "ИНН: 490913669400", href: "" },
      { title: "г. Владивосток, Ульяновская 6", href: "" },
      { title: "Политика конфиденциальности", href: "/policy" },
    ],
    right: [
      {
        src: "/images/svg/media/vk.svg",
        alt: "VK",
        alt2: "Косметология",
        href: "https://vk.com/verdera_cosmetology",
      },
      {
        src: "/images/svg/media/tg.svg",
        alt: "TG",
        alt2: "Телеграм",
        href: "https://t.me/verdera_cosmetology",
      },
      {
        src: "/images/svg/media/vk.svg",
        alt: "VK",
        alt2: "Хирургия",
        href: "https://vk.com/verdera_surgery",
      },
    ],
  };

  return (
    <footer className="bg-primary text-secondary text-base xl:mt-32 mt-10">
      <div className="container flex flex-col md:flex-row justify-between items-center py-10">
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
        <div className="flex flex-col gap-6 text-sm items-center mt-10 md:mt-0 text-center">
          {footerItems.center.map((item) => (
            <p key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </p>
          ))}
        </div>
        <div className="flex flex-col xl:gap-6 gap-3 items-center mt-10 md:mt-0">
          <p className="xl:text-2xl">© Verdera2025</p>
          <ul className="flex xl:gap-12 gap-6 items-center justify-center">
            {footerItems.right.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                className="flex flex-col items-center"
              >
                <div className="relative xl:w-[70px] w-[50px] h-[50px]">
                  <Image fill src={item.src} alt={item.alt} />
                </div>
                <p className="text-sm">{item.alt2}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
