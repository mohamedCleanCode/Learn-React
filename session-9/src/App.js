import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Products from "./components/Products";
import { diposite, withDraw } from "./rtk/slices/bank-slice";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Bank Account: {state.bank}</p>
      <input type="number" />
      <button onClick={() => dispatch(withDraw(100))}>Withdraw</button>
      <button onClick={() => dispatch(diposite(100))}>Deposite</button>
      <Products />
    </div>
  );
}

export default App;
