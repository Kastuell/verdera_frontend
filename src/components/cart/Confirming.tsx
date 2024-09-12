"use client";

import { useProfile } from "@/hooks/useProfile";
import { Suspense } from "react";
import { Back } from "../Back";
import { Container } from "../ui";
import { ComfirmingForm } from "./ConfirmingForm";

export const Confirming = () => {
  const { data } = useProfile();

  return (
    <Container>
      <Back>В корзину</Back>
      <Suspense fallback={<div></div>}>
        {data && <ComfirmingForm data={data} />}
      </Suspense>
    </Container>
  );
};
