import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { VscLoading } from "react-icons/vsc";
import { Word } from "../types";
import { getWord } from "../services/getWord";

interface Props {
  wordInfo: Word;
  setWordInfo: (word: Word) => void;
}

export const SearchBar = ({ wordInfo, setWordInfo }: Props) => {
  const [inputWord, setinputWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const data = await getWord(inputWord);
    setWordInfo(data);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputWord(e.target.value);
  };

  return (
    <header className="w-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-300 to-neutral-100 text-white py-16 md:py-9 lg:grow border border-b-neutral-300 lg:border-r-neutral-300 shadow-lg">
      <h1 className="text-4xl mb-4 font-bold text-neutral-700">Diccionario</h1>
      <div className="max-w-[500px] w-full px-10 box-border flex justify-center gap-1">
        <input
          value={inputWord}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-transparent outline-none border-4 border-neutral-700 rounded-tl-lg rounded-bl-lg bg-slate-100 focus:shadow-xl text-neutral-700 transition-shadow font-bold "
          type="text"
          placeholder="Palabra: "
        />
        <button
          disabled={isLoading}
          onClick={handleClick}
          className={`py-3 px-4 grid place-content-center bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800 text-white rounded-tr-lg rounded-br-lg transition-colors disabled:bg-neutral-500 ${
            isLoading ? "cursor-default" : "cursor-pointer"
          }`}
        >
          {isLoading ? <VscLoading className="animate-spin" /> : <IoSend />}
        </button>
      </div>
      <p className="text-xs text-neutral-700">
        (recuerda utilizar tildes en caso necesario)
      </p>
    </header>
  );
};
//
