import { Word as WordType } from "../types";

export const WordData = ({ word }: { word: WordType | undefined }) => {
  return (
    <section className="w-fit mx-7 md:mx-16 my-7">
      {word?.ok && (
        <>
          <h2 className="text-3xl text-neutral-300 italic mb-3 font-bold px-4 box-border">
            {word.data.word}
          </h2>
          {word.data.meanings && word.data.meanings.length > 0 ? (
            <ul className="flex flex-col gap-3 bg-neutral-800 p-5 box-border rounded-lg">
              {word.data.meanings[0].senses.map((item) => (
                <li
                  key={item.meaning_number}
                  className="text-neutral-400 italic"
                >
                  {item.raw}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay significados disponibles.</p>
          )}
        </>
      )}
      {word?.ok === false && (
        <h2 className="text-center my-8 text-xl text-neutral-300">
          Redacte bien o asegurese de que existe
        </h2>
      )}
    </section>
  );
};
