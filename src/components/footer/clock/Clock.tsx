import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [clockState, setClockState] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div>{clockState}</div>;
};
