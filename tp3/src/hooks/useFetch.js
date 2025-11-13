import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const getFetch = async () => {
      try {
        setLoading(true);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Error en la solicitud");

        const json = await res.json();

        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getFetch();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
