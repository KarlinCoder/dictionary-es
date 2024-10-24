export interface Word {
  data: Data;
  ok: boolean;
}

export interface Data {
  word: string;
  meanings: Meaning[];
}

export interface Meaning {
  origin: Origin;
  senses: Sense[];
}

export interface Origin {
  raw: string;
  type: string;
  voice: string;
  text: string;
}

export interface Sense {
  raw: string;
  meaning_number: number;
  category: string;
  usage: string;
  description: string;
  synonyms: string[] | null;
  antonyms: string[] | null;
}
