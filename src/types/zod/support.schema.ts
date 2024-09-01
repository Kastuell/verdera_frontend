"use client";

import { z } from "zod";
import { phoneRegex } from "./phoneRegex";

export const supportSchema = z.object({
  description: z
    .string({ required_error: "Обязательное поле!" })
    .min(10, "Минимум 10 символов!")
    .max(300, "Максимум 300 символов!"),
});

export const supportUnAuthSchema = z.object({
  description: z
    .string({ required_error: "Обязательное поле!" })
    .min(10, "Минимум 10 символов!")
    .max(300, "Максимум 300 символов!"),
  name: z
    .string({ required_error: "Обязательное поле!" })
    .min(1, "Обязательное поле!"),
  phone: z
    .string({ required_error: "Обязательное поле!" })
    .min(1, "Обязательное поле!")
    .regex(phoneRegex, "Некорректный номер!"),
  messenger: z
    .string({ required_error: "Обязательное поле!" })
    .min(1, "Обязательное поле!"),
});
