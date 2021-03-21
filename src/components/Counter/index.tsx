import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (num: number = 1): void => {
    setCounter(counter + num);
  };

  return (
    <div>
      <h1>Counter: useState</h1>
      <span>Valor {counter}</span>
      <br />
      <button onClick={() => incrementar()}>sumar + 1</button>
      <button onClick={() => incrementar(2)}>sumar + 2</button>
      <button onClick={() => setCounter(0)}>resetear</button>
    </div>
  );
};

export default Counter;
