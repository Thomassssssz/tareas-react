import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import CharacterInfo from "../components/CharacterInfo";

export default function HomePage() {
  const { count, increment, decrement } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://dragonball-api.com/api/characters/${count}`
  );

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Personajes de Dragon Ball</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={decrement}
          disabled={count === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Siguiente
        </button>
      </div>

      {isLoading && <Loading />}

      {error && <p className="text-red-500">Error: {error}</p>}

      {data && !isLoading && <CharacterInfo character={data} />}
    </div>
  );
}
