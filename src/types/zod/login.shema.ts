"use client";

import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Обязательное поле!" })
    .email("Некорректная почта!"),
  password: z
    .string({ required_error: "Обязательное поле!" })
    .min(6, "Минимум 6 символов!")
    .max(20, "Максимум 20 символов!"),
});
