import { useEffect, useState } from "react";

export function useGetTimer(): number {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const intervalTimerId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalTimerId);
    };
  }, []);

  return time;
}
