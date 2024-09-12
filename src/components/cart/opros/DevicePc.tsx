export const DevicePc = () => {
  return (
    <div>
      <h6 className="font-semibold text-lg">
        Для комфортной, а главное, продуктивной работы с преподавателем по
        видеосвязи, вам необходимы
      </h6>
      <ul className="list-decimal list-inside text-lg space-y-3 mt-3">
        <li>веб-камера достаточного качества;</li>
        <li>стабильный интернет;</li>
        <li>
          <a className="text-greenish hover:underline" href="">
            гибкий настольный держатель.
          </a>
        </li>
        <li>
          расположить веб-камеру паралельно столу на расстоянии около 20см от
          стола так, чтобы преподаватель хорошо видел как вы работаете с
          тренажёром, а вы могли видеть в экране трансляцию.
        </li>
      </ul>
      <div className="mt-5">
        <a href="" className="text-greenish hover:underline">
          Веб камеру
        </a>{" "}
        и{" "}
        <a href="" className="text-greenish hover:underline">
          гибкий настольный держатель
        </a>{" "}
        вы можете приобрести в любом магазине электроники или на нашем сайте в
        разделе{" "}
        <a href="" className="font-bold hover:underline">
          Расходники.
        </a>
      </div>
    </div>
  );
};
