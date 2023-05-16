import { useEffect, useMemo, useRef, useState } from 'react';

const useInterval = (
  callback: Function,
  delay: number = 1000,
  runOnMounted = true
) => {
  const savedCallback = useRef<Function>();
  const [isRunning, setRunning] = useState(runOnMounted);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const timer = useRef<NodeJS.Timer>();

  const handlePlayPauseInterval = () => setRunning((prevState) => !prevState);

  const runInterval = () => setRunning(true);

  const stopInterval = () => setRunning(false);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (isRunning) {
      timer.current = setInterval(tick, delay);

      return () => clearInterval(timer.current);
    }
  }, [isRunning, delay]);

  return useMemo(
    () => ({
      timer: timer.current,
      toggleInterval: handlePlayPauseInterval,
      runInterval,
      stopInterval,
    }),
    []
  );
};

export default useInterval;
