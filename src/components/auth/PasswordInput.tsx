"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui";

export const PasswordInput = ({
  field,
  placeholder,
}: {
  field: any;
  placeholder: string;
}) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className="relative">
      <Input
        type={!showPass ? "password" : "text"}
        placeholder={placeholder}
        {...field}
      />
      <button
        onClick={() => setShowPass((prev) => !prev)}
        className="absolute top-0 right-5 h-full"
        type="button"
      >
        {!showPass ? <Eye /> : <EyeOff />}
      </button>
    </div>
  );
};
