

import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart";

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="about" element={<h1>Nosotros</h1>} />
        <Route path="products" element={<ItemListContainer />} />
        <Route path="products/:id" element={<ItemDetail/>} />
        <Route path="cart" element={<Cart />} />
  
      </Routes>
    
      
    </div>
  );
}

export default App;
