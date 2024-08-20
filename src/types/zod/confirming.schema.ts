"use client";

import { z } from "zod";
import { phoneRegex } from "./phoneRegex";

export const confirmingSchema = z.object({
  city: z.string({ required_error: "Укажите город!" }).min(1, "Укажите город!"),
  delivery: z.string({ required_error: "Выберите способ доставки!" }),
  name: z.string({}).max(30, "Максимум 30 символов!").optional(),
  family: z.string({}).max(30, "Максимум 30 символов!").optional(),
  phone: z.string().regex(phoneRegex, "Некорректный номер!").optional(),
  email: z.string().email("Некорректная почта!").optional(),
});
