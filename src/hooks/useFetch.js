import { useEffect, useState } from "react";

const useFetch = (url, method = "GET", options = {}, search = false) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://api.themoviedb.org/3/movie";

  const apiKey = "8063bc7c0a515fe2409caee8d299de93";

  useEffect(() => {
    const endpoint = `${baseUrl}${url}?api_key=${apiKey}`;
    console.log(endpoint);

    const fetchData = async () => {
      try {
        const res = await fetch(endpoint, {
          method,
          ...options,
        });
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  return { response, error, loading };
};

export default useFetch;
