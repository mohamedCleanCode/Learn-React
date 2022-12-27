import { useState } from "react";

export default function CounterFC() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
