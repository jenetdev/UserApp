import { useEffect, useState } from 'react';
import axios from 'axios';

function useAxiosGet(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios GET request
    axios.get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default useAxiosGet;
