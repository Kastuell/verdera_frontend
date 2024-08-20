"use client";

import { useProfile } from "@/hooks/useProfile";
import { Back } from "../Back";
import { Container } from "../ui";
import { ComfirmingForm } from "./ConfirmingForm";

export const Confirming = () => {

  const { data } = useProfile();

  return (
    <Container>
      <Back>В корзину</Back>
      <ComfirmingForm data={data} />
    </Container>
  );
};
