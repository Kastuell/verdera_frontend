"use client";

import { z } from "zod";
import { phoneRegex } from "./phoneRegex";

export const confirmingSchema = z.object({
  city: z.string({ required_error: "Выберите город!" }),
  delivery: z.string({ required_error: "Выберите способ доставки!" }),
  name: z
    .string({
      required_error: "Обязательное поле!",
    })
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!"),
  family: z
    .string({
      required_error: "Обязательное поле!",
    })
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!"),
  phone: z
    .string({ required_error: "Обязательное поле!" })
    .regex(phoneRegex, "Некорректный номер!"),
  email: z
    .string({ required_error: "Обязательное поле!" })
    .email("Некорректная почта!"),
});
