import Image from "next/image";

interface IIntroTeacherItem {
  src: string;
  name: string;
  description: string;
  description1: string;
  description2: string;
}

export const IntroTeacherItem = (props: IIntroTeacherItem) => {
  const { src, name, description, description1, description2 } = props;

  return (
    <div className="flex flex-col gap-2 basis-1/2 items-center text-center xl:text-start">
      <div className="relative">
        <Image src={src} alt={name} width={400} height={400} />
      </div>
      <h3 className="font-bold xl:text-3xl text-xl">{name}</h3>
      <p className="xl:text-xl text-lg font-medium">{description}</p>
      <div className="text-center space-y-2">
        <p className="xl:text-lg text-base font-medium text-grayish">
          {description1}
        </p>
        <p className="xl:text-lg text-base font-medium text-grayish">
          {description2}
        </p>
      </div>
    </div>
  );
};
