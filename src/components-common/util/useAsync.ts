import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";
import { Types } from "../../../types/data-access-types";
import type { AxiosResponse } from "axios";

export interface asyncFunctionType {
  (): Promise<AxiosResponse<Types>>;
}

interface useAsyncType {
  (asyncFunction: asyncFunctionType): {
    execute: () => Promise<void>;
    loading: boolean;
    error: any;
    data: Types | null;
  };
}

export const useAsync: useAsyncType = (asyncFunction) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<Types | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response: AxiosResponse<Types> = await asyncFunction();
      const body: Types = response?.data;
      setData(body);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
