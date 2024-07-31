import Image from "next/image";

interface IIntroTeacherItem {
  src: string;
  name: string;
  description: string;
}

export const IntroTeacherItem = (props: IIntroTeacherItem) => {
  const { src, name, description } = props;

  return (
    <div className="flex flex-col xl:gap-6 gap-2 basis-1/2 items-center onHover text-center xl:text-start">
      <div className="relative">
        <Image src={src} alt={name} width={500} height={500} />
      </div>
      <h3 className="font-bold xl:text-4xl text-2xl">{name}</h3>
      <p className="xl:text-2xl text-lg font-medium">{description}</p>
    </div>
  );
};
