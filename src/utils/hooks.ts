import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (json ?.error) {
          setError(json.error);
        } else if (json ?.code !== 200) { // TODO check for other codes here that are valid
          setError(new Error(`Fetch to ${url} returned ${json.code}`));
        }
        setData(json ?.payload);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error(`Unknown error fetching ${url}`));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};