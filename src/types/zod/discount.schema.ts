import { z } from "zod";

export const discountSchema = z.object({
  email: z
    .string({ required_error: "Обязательное поле!" })
    .email("Некорректная почта!"),
});
