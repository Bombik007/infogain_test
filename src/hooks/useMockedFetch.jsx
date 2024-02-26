import { useCallback, useMemo, useState } from "react";

import { MOCKED_DATA } from "../mock";

export const useMockedFetch = (_url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);

    new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(MOCKED_DATA);
      }, 3000);
    })
      .then((data) => setData(data))
      .catch((err) => {
        setError(err);
        console.log(`Error: ${err}`);
      })
      .finally(() => setLoading(false));
  }, []);

  return useMemo(
    () => ({ data, loading, error, fetchData }),
    [data, error, fetchData, loading]
  );
};
