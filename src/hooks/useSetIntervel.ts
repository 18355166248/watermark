import { useRef, useEffect } from 'react';

type fn = Function;
function useInterval(callback: fn, time = 300) {
  const interval = useRef(null);

  useEffect(() => {
    interval.current = callback;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      interval.current();
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
}

export default useInterval;
