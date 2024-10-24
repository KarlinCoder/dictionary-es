import { useState } from "react";
import { InfoContainer } from "./InfoContainer";
import { Footer } from "./Footer.tsx";
import { Word as WordType } from "../types";

export const App = () => {
  const [wordInfo, setWordInfo] = useState<WordType>();

  return (
    <>
      <main className="min-w-screen min-h-screen flex flex-col items-center justify-between box-border bg-neutral-900 ">
        <InfoContainer wordInfo={wordInfo!} setWordInfo={setWordInfo} />
        <Footer />
      </main>
    </>
  );
};
