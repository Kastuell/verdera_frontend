"use client";

import { z } from "zod";
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
  phone: z
    .string({ required_error: "Обязательное поле!" })
    .regex(phoneRegex, "Некорректный номер!")
    .optional(),
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
