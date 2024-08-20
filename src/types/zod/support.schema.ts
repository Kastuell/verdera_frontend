"use client";

import { z } from "zod";

export const supportSchema = z.object({
  description: z
    .string({ required_error: "Обязательное поле!" })
    .min(10, "Минимум 10 символов!")
    .max(300, "Максимум 3000 символов!"),
});
