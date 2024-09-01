"use client";

import { z } from "zod";
import { zfd } from "zod-form-data";
import { phoneRegex } from "./phoneRegex";

export const profileSchema = z.object({
  name: z
    .string({
      required_error: "Обязательное поле!",
    })
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!")
    .optional(),
  surname: z
    .string({
      required_error: "Обязательное поле!",
    })
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!")
    .optional(),
  family: z
    .string({
      required_error: "Обязательное поле!",
    })
    .min(1, "Заполните поле!")
    .max(30, "Максимум 30 символов!")
    .optional(),
  phone: z.string().regex(phoneRegex, "Некорректный номер!").optional(),
  // birthday: z
  //   .date({ required_error: "Обязательное поле!" })
  //   .min(new Date(new Date().setDate(new Date().getDate() - 100 * 365)))
  //   .max(
  //     new Date(new Date().setDate(new Date().getDate() - 18 * 365)),
  //     "Вам нет 18!"
  //   )
  //   .optional(),

  // password: z
  //   .string({ required_error: "Обязательное поле!" })
  //   .min(6, "Минимум 6 символов!")
  //   .max(20, "Максимум 20 символов!")
  //   .isOptional(),
  // confirmPassword: z
  //   .string({ required_error: "Обязательное поле!" })
  //   .min(6, "Минимум 6 символов!")
  //   .max(20, "Максимум 20 символов!")
  //   .isOptional(),
});
// .superRefine(({ confirmPassword, password }, ctx) => {
//   if (confirmPassword !== password) {
//     ctx.addIssue({
//       code: "custom",
//       message: "Пароли не совпадают!",
//       path: ["confirmPassword"],
//     });
//   }
// });

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
