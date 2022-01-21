import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import FetchData from "./components/FetchData";
import Carts from "./components/Carts";
import { CheckOut } from "./components/CheckOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<FetchData />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
