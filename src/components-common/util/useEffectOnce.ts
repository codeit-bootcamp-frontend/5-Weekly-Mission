import { useEffect } from "react";

interface useEffectOnceType {
  (callback: () => Promise<any>): void;
}

export const useEffectOnce: useEffectOnceType = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
