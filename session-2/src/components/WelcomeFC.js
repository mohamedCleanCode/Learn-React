import { useState } from "react";

function WelcomeFC(props) {
  let [counter, setCounter] = useState(0);

  let increese = () => {
    setCounter(counter++);
  };
  return (
    <>
      <h1>Welcome {props.name}</h1>
      <p>age: {props.age}</p>
      <p>job: {props.job}</p>
      <p>{counter}</p>
      <button onClick={increese}>+</button>
    </>
  );
}
export default WelcomeFC;
