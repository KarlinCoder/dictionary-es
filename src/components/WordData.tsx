import { Word as WordType } from "../types";

export const WordData = ({ word }: { word: WordType | undefined }) => {
  return (
    <section className="flex flex-col justify-center w-full max-w-[900px] px-7 mx-7 md:mx-16 my-7">
      {word?.ok && (
        <>
          <h2 className="text-3xl text-slate-neutral border-b-2 border-neutral-700 italic mb-3 font-bold px-4 box-border pb-3">
            {word.data.word}
          </h2>
          {word.data.meanings && word.data.meanings.length > 0 ? (
            <ul className="flex flex-col gap-3 px-5 box-border rounded-lg">
              {word.data.meanings[0].senses.map((item) => (
                <li
                  key={item.meaning_number}
                  className="text-neutral-600 itaic font-semibold leading-5"
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
        <h2 className="text-center my-8 text-xl text-neutral-500">
          Redacte bien o asegurese de que existe
        </h2>
      )}
    </section>
  );
};
