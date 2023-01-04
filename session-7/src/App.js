import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Navbar />
        <ProductsList />
      </ProductsProvider>
    </div>
  );
}

export default App;
