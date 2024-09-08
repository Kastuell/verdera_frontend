"use client";

import { useConfirmEmail } from "@/hooks/useConfirmEmail";
import { useProfile } from "@/hooks/useProfile";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui";

export const Confirm = () => {
  const email = useSearchParams().get("email");
  const code = useSearchParams().get("code");
  const { mutate } = useConfirmEmail();
  const { data } = useProfile();
  return (
    <div className="mt-20">
      <Button
        className="mt-20"
        onClick={() => mutate({ email: email ?? "", code: code ?? "" })}
      >
        Подтвердить почту
      </Button>
    </div>
  );
};
