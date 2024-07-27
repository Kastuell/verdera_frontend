"use client";

import { userService } from "@/services/user.service";
import { z } from "zod";
import { phoneRegex } from "./phoneRegex";

export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: "Обязательное поле!",
      })
      .min(1, "Заполните поле!")
      .max(30, "Максимум 30 символов!"),
    surname: z
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
    birthday: z
      .date({ required_error: "Обязательное поле!" })
      .min(new Date(new Date().setDate(new Date().getDate() - 100 * 365)))
      .max(
        new Date(new Date().setDate(new Date().getDate() - 18 * 365)),
        "Вам нет 18!"
      ),
    phone: z
      .string({ required_error: "Обязательное поле!" })
      .regex(phoneRegex, "Некорректный номер!"),
    email: z
      .string({ required_error: "Обязательное поле!" })
      .email("Некорректная почта!"),
    social: z
      .string({ required_error: "Обязательное поле!" })
      .min(1, "Заполните поле!"),
    region: z
      .string({ required_error: "Обязательное поле!" })
      .min(1, "Заполните поле!"),
    password: z
      .string({ required_error: "Обязательное поле!" })
      .min(6, "Минимум 6 символов!")
      .max(20, "Максимум 20 символов!"),
    confirmPassword: z
      .string({ required_error: "Обязательное поле!" })
      .min(6, "Минимум 6 символов!")
      .max(20, "Максимум 20 символов!"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают!",
        path: ["confirmPassword"],
      });
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const res = await userService.checkEmail(email);
    if (res == "Почта занята") {
      ctx.addIssue({
        code: "custom",
        message: "Пользователь с такой почтой уже зарегистрирован!",
        path: ["email"],
      });
    }
  });
