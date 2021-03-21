import { useEffect, useState } from "react";

interface Props {
  milesegundos: number;
}

const Timer = ({ milesegundos }: Props) => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => {};
  }, []);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};

export default Timer;
