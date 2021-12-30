import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
   let Interval= setInterval(() => {

      setTimer((p) => {
        if (p === 20) {
          clearInterval(Interval)
          return 20;
        }
        return p + 1;
      });
   }, 2000);
    return () => {
      clearInterval(Interval)
    }
  }, []);
  return (
    <div>
      <h1>Count : {timer}</h1>
    </div>
  );
};
