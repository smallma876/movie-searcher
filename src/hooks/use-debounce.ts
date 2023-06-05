import { useDebugValue, useEffect, useState } from "react";

export const useDebounce = (query: string) => {
  useDebugValue(query);
  const [debouncer, setDebouncer] = useState("");

  useEffect(() => {
    const idDebounce = setTimeout(() => {
      setDebouncer(query);
    }, 500);

    return () => clearTimeout(idDebounce);
  }, [query]);

  return debouncer;
};
