import { Word as WordType } from "../types";

const API_URL = "https://rae-api.com/api/words/";

export const getWord = (word: string): Promise<WordType> => {
  const data = fetch(`${API_URL}${word}`).then((r) => r.json());
  return data;
};
