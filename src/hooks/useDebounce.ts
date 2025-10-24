import { useEffect, useState } from "react";

export function useDebounce<T>(value: T): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounceValue;
}
