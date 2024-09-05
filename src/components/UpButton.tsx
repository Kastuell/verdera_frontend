"use client";

import { MoveUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const UpButton = () => {
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

  const scrollUp = () =>
    window !== undefined && window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    upToTop && (
      <MoveUpIcon
        onClick={() => scrollUp()}
        className="fixed right-16 text-secondary bottom-16 mix-blend-difference rounded-full p-2 transition duration-300 hover:opacity-75 cursor-pointer animate-up-btn-up"
        size={50}
      />
    )
  );
};
