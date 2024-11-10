import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/Slider";
import ProductsContainer from "./components/ProductsContainer";
;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductsContainer className="raw" />
     
    </div>
  );
}

export default App;
