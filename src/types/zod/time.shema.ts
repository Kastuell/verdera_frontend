"use client";

import { z } from "zod";

export const timeSchema = z.object({
  time: z
    .any()
});
