import { useEffect, useState } from "react";

export default function useClock(initialValue: string) {
  const [currentTime, setCurrentTime] = useState<string>(initialValue);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return { currentTime, setCurrentTime };
}
