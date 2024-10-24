import { useState } from "react";
import { InfoContainer } from "./InfoContainer";
import { Footer } from "./Footer.tsx";
import { Word as WordType } from "../types";

export const App = () => {
  const [wordInfo, setWordInfo] = useState<WordType>();

  return (
    <>
      <main className="min-w-dvh min-h-dvh flex flex-col items-center justify-between box-border ">
        <InfoContainer wordInfo={wordInfo!} setWordInfo={setWordInfo} />
        <Footer />
      </main>
    </>
  );
};
