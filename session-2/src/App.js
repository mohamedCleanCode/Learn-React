import "./App.css";
import Form from "./components/Form";
import Product from "./components/Product";
import WelcomeCC from "./components/WelcomeCC";
import WelcomeFC from "./components/WelcomeFC";

function App() {
  return (
    <div className="App">
      <Form />
      <WelcomeFC name="Mohamed" age="23" job="Frontend Developer" />
      <WelcomeCC name="Ashrakat" />
      <Product title="product-1" desc="loream lorearm lorearm" price="50" />
      <Product title="product-2" desc="loream lorearm lorearm" price="70" />
      <Product title="product-3" desc="loream lorearm lorearm" price="100" />
    </div>
  );
}

export default App;
