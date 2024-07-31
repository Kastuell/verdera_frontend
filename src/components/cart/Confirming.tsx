"use client";

import { Back } from "../Back";
import { Container } from "../ui";
import { ComfirmingForm } from "./ConfirmingForm";

export const Confirming = () => {
  return (
    <Container>
      <Back>В корзину</Back>
      <ComfirmingForm />
    </Container>
  );
};
