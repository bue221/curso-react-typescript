import { useState } from "react";
import Timer from "./Timer";

const TimerDad = () => {
  const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <div>
      <span>Milisegundos {milisegundos}</span>
      <button onClick={() => setMilisegundos(1000)}>1000</button>
      <button onClick={() => setMilisegundos(2000)}>2000</button>
      <Timer milesegundos={milisegundos} />
    </div>
  );
};

export default TimerDad;
