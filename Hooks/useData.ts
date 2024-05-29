import { useCallback, useState } from "react";

type Pram = (number | string | undefined | null)[];

export function useData(asyncFunction: (...pram: any) => Promise<any>) {
  const [data, setData] = useState<any>(null);

  const getData = useCallback(
    async (...value: Pram) => {
      try {
        const result = await asyncFunction(...value);
        setData(result);
      } catch (err) {
        setData(null);
      }
    },
    [asyncFunction]
  );

  const returnArray: [any, (...value: Pram) => Promise<void>] = [data, getData];

  return returnArray;
}
