"use client";

import { z } from "zod";
import { zfd } from "zod-form-data";
import { phoneRegex } from "./phoneRegex";

export const profileSchema = z.object({
  name: z
    .string()
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!")
    .optional(),
  surname: z
    .string()
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!")
    .optional(),
  family: z
    .string()
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!")
    .optional(),
  phone: z.string().regex(phoneRegex, "Некорректный номер!").optional(),
});

export const avatarSchema = z.object({
  avatar: zfd
    .file()
    .refine((file) => file.size < 5000000, {
      message: "File can't be bigger than 5MB.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
      {
        message: "File format must be either jpg, jpeg lub png.",
      }
    ),
});
