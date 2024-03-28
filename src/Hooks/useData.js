import { useState } from 'react';

export function useData(asyncFunction) {
  const [Data, setData] = useState(null);

  async function getData() {
    const result = await asyncFunction();
    setData(result);
  }

  return [Data, getData];
}
