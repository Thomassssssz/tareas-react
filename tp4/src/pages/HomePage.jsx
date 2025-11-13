import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";
import { useCounter } from "../hooks/useCounter";

export const HomePage = () => {
  const { count, increment, decrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://dragonball-api.com/api/characters/${count}`
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">
        API Dragon Ball
      </h1>

      <div className="w-full max-w-xs min-h-[300px] flex items-center justify-center mb-6">
        {isLoading ? <Loading /> : <CharacterInfo character={data} />}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => decrement(1)}
          disabled={count === 1 || isLoading}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <button
          onClick={() => increment(1)}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
