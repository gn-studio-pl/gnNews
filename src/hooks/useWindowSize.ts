import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const handleResize = () =>
      setWindowSize([window.innerWidth, window.innerHeight]);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize[0],
    height: windowSize[1],
  };
};
