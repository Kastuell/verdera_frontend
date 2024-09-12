export const DevicePhone = () => {
  return (
    <div>
      <h6 className="font-semibold text-lg">
        Для комфортной, а, главное, продуктивной работы с преподавателем по
        видеосвязи вам необходимо:
      </h6>
      <ul className="list-decimal list-inside text-lg space-y-3 mt-3">
        <li>хороший интернет;</li>
        <li>
          расположить телефон паралельно столу на расстоянии около 20см от стола
          так, чтобы преподаватель хорошо видел как вы работаете с тренажёром, а
          вы могли видеть в телефоне трансляцию.
        </li>
      </ul>
      <div className="mt-5">
        Для этого хорошо подойдёт{" "}
        <a href="" className="text-greenish hover:underline">
          гибкий держатель настольный
        </a>
        , который вы можете приобрести в любом магазине электроники, или на
        нашем сайте в разделе <a href="" className="font-bold hover:underline">Расходники.</a>
      </div>
    </div>
  );
};
