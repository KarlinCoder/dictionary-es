import { Word as WordType } from "../types";
import { SearchBar } from "./SearchBar";
import { WordData } from "./WordData";

interface Props {
  wordInfo: WordType;
  setWordInfo: (info: WordType) => void;
}

export const InfoContainer = ({ wordInfo, setWordInfo }: Props) => {
  return (
    <main className="w-full flex flex-col items-center">
      <SearchBar wordInfo={wordInfo!} setWordInfo={setWordInfo!} />
      <WordData word={wordInfo!} />
    </main>
  );
};
