import { useEffect, useState } from 'react';
import { api } from '../api';

interface IParams {
  limit: number;
  skip: number;
}

export const useFetch = <T,>(e: string, params?: IParams) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadin, setLoading ] = useState<boolean>(true);
  useEffect(() => {
      setLoading(true)
    api
      .get(e,{params})
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [e, JSON.stringify(params)]);

  return { data, error, loadin };
};
