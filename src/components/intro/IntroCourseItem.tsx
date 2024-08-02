interface IIntroCourseItem {
  title: string;
  description: string;
}

export default function IntroCourseItem(props: IIntroCourseItem) {
  const { title, description } = props;

  return (
    <ul className="flex flex-col items-center justify-center gap-2 xl:gap-5">
      <h3 className="text-5xl md:text-7xl xl:text-9xl font-bold text-greenish">{title}</h3>
      <p className="text-2xl md:text-4xl text-center">{description}</p>
    </ul>
  );
}
