"use client";

import { userService } from "@/services/user.service";
import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({ required_error: "Обязательное поле!" })
      .email("Некорректная почта!"),
    password: z
      .string({ required_error: "Обязательное поле!" })
      .min(6, "Минимум 6 символов!")
      .max(20, "Максимум 20 символов!"),
  })
  .superRefine(async ({ email }, ctx) => {
    if (email.includes("@")) {
      const res = await userService.checkEmail(email);
      if (res == "Почта свободна") {
        ctx.addIssue({
          code: "custom",
          message: "Пользователя с такой почтой нет!",
          path: ["email"],
        });
      } else return;
    }
  });
