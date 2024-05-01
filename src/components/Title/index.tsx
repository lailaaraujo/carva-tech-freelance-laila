"use client";

import { CustomizacaoClient } from "@/@types/types";
import { useTheme } from "next-themes";

interface ContentTitleProps {
  firstWord: string;
  secondWord: string;
  flexCol: boolean;
  customizacaoClient?: CustomizacaoClient;
}

export const ContentTitle = ({
  firstWord,
  secondWord,
  flexCol,
  customizacaoClient,
}: ContentTitleProps) => {
  const { theme, systemTheme } = useTheme();

  return (
    <h1
      tabIndex={0}
      className={`flex text-center ${
        flexCol
          ? "flex-col justify-center text-4xl sm:text-6xl"
          : "max-sm:flex-col text-2xl sm:text-4xl mb-6"
      } font-bold`}
    >
      <span className='text-font '>{firstWord}</span>
      {!flexCol && <span className='max-sm:hidden'>{"\u00A0"}</span>}
      <span
        style={
          (customizacaoClient && theme !== "dark" && theme !== "system") ||
          (customizacaoClient && theme === "system" && systemTheme !== "dark")
            ? { color: customizacaoClient?.corLight }
            : { color: customizacaoClient?.corDark }
        }
        className={`h-full mb-12 ${
          (customizacaoClient && theme !== "dark" && theme !== "system") ||
          (customizacaoClient && theme === "system" && systemTheme !== "dark")
            ? ""
            : "text-gradient-biomob-green font-black"
        }`}
      >
        {secondWord}
      </span>
    </h1>
  );
};
