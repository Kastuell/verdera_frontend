import { Container, Head, ScheduleWrapper } from "@/components";
import { AddTimeButton } from "@/components/schedule/AddTimeButton";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Календарь",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <Container>
      <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
        <Head center={false}>Расписание</Head>
        <h2 className="text-xl">Время в расписании указывается по Московскому часовому поясу</h2>
        <AddTimeButton>Добавить время</AddTimeButton>
      </div>
      <ScheduleWrapper />
    </Container>
  );
}
