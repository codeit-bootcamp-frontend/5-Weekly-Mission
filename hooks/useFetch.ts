import { Method } from '@/common/api';
import { useCallback, useEffect, useState } from 'react';

interface UseFetchParams {
  url?: string;
  method?: Method;
  headers?: object;
  body?: object;
  callback?: (result: Response | object) => void;
  errorCallback?: (e: Error) => void;
  finalCallback?: () => void;
  immediate?: boolean;
}

export interface SendRequestParams {
  url?: string;
  method?: Method;
  headers?: object;
  body?: object;
}

export interface ReturnType<T> {
  sendRequest: (param?: SendRequestParams) => void;
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>({
  url,
  method = 'GET',
  headers,
  body,
  callback,
  errorCallback,
  finalCallback,
  immediate,
}: UseFetchParams): ReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const sendRequest = useCallback(
    async (sendRequestParams?: SendRequestParams) => {
      let fetchUrl = url;
      let fetchMethod = method;
      let fetchHeaders = headers;
      let fetchBody = body;

      if (sendRequestParams) {
        fetchUrl = sendRequestParams.url;
        fetchMethod = sendRequestParams.method ? sendRequestParams.method : 'GET';
        fetchHeaders = sendRequestParams.headers;
        fetchBody = sendRequestParams.body;
      }

      setLoading(true);
      setError(null);

      fetchHeaders = fetchHeaders
        ? fetchHeaders
        : typeof fetchBody === 'object' && fetchBody !== null
        ? { 'Content-Type': 'application/json' }
        : {};

      const option = {
        method: fetchMethod,
        headers: fetchHeaders,
        body: fetchBody ? JSON.stringify(fetchBody) : null,
      };

      try {
        const response = await fetch(fetchUrl as RequestInfo | URL, option as RequestInit);
        const result = await response.json();

        setData(result);
        if (response.ok) callback?.(result);
      } catch (e) {
        const error = e as Error;
        setError(error);
        errorCallback?.(e as Error);
      } finally {
        setLoading(false);
        finalCallback?.();
      }
    },
    [url, method, headers, body, callback, errorCallback, finalCallback]
  );

  useEffect(() => {
    if (immediate) {
      sendRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate, url]);

  return { sendRequest, data, loading, error };
};

export default useFetch;
