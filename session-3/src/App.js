import { useState } from "react";
import "./App.css";
import List from "./components/List";
import ProductsList from "./components/ProductsList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let element = isLoggedIn ? (
    <h1>Iam logged in</h1>
  ) : (
    <h1>Iam not logged in</h1>
  );
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
      {element}
      <List />
      <ProductsList />
    </div>
  );
}

export default App;
