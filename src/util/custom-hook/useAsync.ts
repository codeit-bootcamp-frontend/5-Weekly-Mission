import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

/**
 * useAsync 훅은 비동기 함수를 호출하고, 로딩 상태, 오류 상태 및 데이터를 관리하는 데 사용됩니다.
 *
 * @template T - 비동기 함수의 응답 데이터 타입입니다.
 * @param {() => Promise<AxiosResponse<T>>} asyncFunction - 비동기 함수입니다. AxiosResponse를 반환해야 합니다.
 * @param {boolean} [lazyMode=false] - lazy 모드인지 여부를 나타냅니다. true로 설정하면 수동으로 execute 함수를 호출할 때까지 비동기 함수가 자동으로 실행되지 않습니다.
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {() => Promise<void>} return.execute - 비동기 함수를 수동으로 실행하는 함수입니다.
 * @returns {boolean} return.loading - 비동기 함수의 로딩 상태입니다.
 * @returns {any | null} return.error - 비동기 함수 실행 중 발생한 오류입니다.
 * @returns {T | null} return.data - 비동기 함수의 응답 데이터입니다.
 *
 * @example
 * const { execute, loading, error, data } = useAsync(() => axios.get('/api/data'), true);
 *
 * useEffect(() => {
 *   execute();
 * }, []);
 */

type UseAsyncParams<T> = {
  asyncFunction: () => Promise<AxiosResponse<T>>;
  enabled?: boolean;
  lazyMode?: boolean;
};

export const useAsync = <T>({
  asyncFunction,
  enabled = true,
  lazyMode = false,
}: UseAsyncParams<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [data, setData] = useState<null | T>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data ?? null);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enabled && !lazyMode) {
      execute();
    }
  }, [enabled, lazyMode]);

  return { execute, loading, error, data };
};
