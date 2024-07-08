import clsx from "clsx"

interface ICourseFormatItem {
    number: string
    description: string
}
type qweT = {
    desc: string
    hover: string[]
}
export default function CourseFormatItem(props: ICourseFormatItem) {

    const { number, description } = props
    const wqe: qweT[] = [
        { desc: "В курс входит 8 лекций из них 2 практических занятия Теоретические лекции, практические занятия, демонстрации и тренировки на тренажерах-манипуляторах.", hover: ['8', 'лекций', '2', 'практических', 'занятия'] },
        { desc: "Выдаем обширный набор материалов для самостоятельного изучения, включая статьи, видео и рекомендации по дальнейшему обучению ", hover: ['обширный', 'набор', 'материалов'] }
    ]
    return (
        <li className="flex gap-20 items-center">
            <div className="text-7xl">
                .0{number}
            </div>
            <div>
                {description}
            </div> {wqe.map(item =>
                <div key={item.desc} className="text-primary">
                    {item.desc.split(" ").map(item1 =>
                        <div className={clsx({
                            ['text-greenish']: item.hover.includes(item1)
                        })}>{item1}</div>
                    )}
                </div>
            )}
        </li>
    )
}