"use client";

import { CircleHelp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const QuestionsButton = () => {
  const { push } = useRouter();
  const [upToTop, setUpToTop] = useState<boolean>(false);

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setUpToTop(true);
        } else {
          setUpToTop(false);
        }
      });
    }
  }, []);

  const goToBlock = () => push("/#questions");
  return (
    upToTop && (
      <CircleHelp
        onClick={() => goToBlock()}
        className="fixed right-6 bottom-6 xl:right-16 xl:bottom-16  bg-secondary text-primary z-[9999] mix-blend-difference rounded-full p-2 transition duration-300 hover:opacity-75 cursor-pointer animate-up-btn-up"
        size={50}
      />
    )
  );
};
