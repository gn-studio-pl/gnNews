import { useEffect, useState } from "react";
import { FormattedTime } from "react-intl";
import { StyledTimer } from "./styles/Timer.styled";
import { AiFillClockCircle } from "react-icons/ai";
import React from "react";

const Timer = (): React.ReactElement => {
  const [time, setTime] = useState<Date>(new Date());

  const refreshClock = React.useCallback(() => {
    setTime(new Date());
  }, [setTime]);

  useEffect(() => {
    const timerID: NodeJS.Timer = setInterval(refreshClock, 1000);
    return function cleanup(): void {
      clearInterval(timerID);
    };
  }, [refreshClock]);

  return (
    <StyledTimer>
      <AiFillClockCircle />
      <FormattedTime value={time} hour="2-digit" minute="2-digit" />
    </StyledTimer>
  );
};

export default Timer;
