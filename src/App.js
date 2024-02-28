import Header from "./components/header";
import "./assets/styles/main.scss";
import Banner from "./components/banner";
import Products from "./components/products";
import Produce from "./components/produce";

function App() {
  return (
    <div className="App">
     <Header />
     <Banner/>
     <Products />
     <Produce />
    </div>
  );
}

export default App;
