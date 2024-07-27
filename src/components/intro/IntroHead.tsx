import { Head } from "../ui";

interface IIntroHead {
  className?: string;
  title: string | undefined;
}

export const IntroHead = (props: IIntroHead) => {
  const { title, className } = props;

  return (
    <div className={`w-full border-y-4 border-primary py-10 ${className}`}>
      <Head>{title}</Head>
    </div>
  );
};
