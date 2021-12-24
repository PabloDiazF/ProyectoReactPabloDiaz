

import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const styleHeader = {
    backgroundColor: "red",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    height: '80px',
    marginBottom: '50px'
  }

  return (
    <div className="App">
      <header style={styleHeader}>

        <Link to="/">
          <span>Logo</span>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">Nosotros</Link>
            </li>
            <li>
              <Link to="products">Productos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="about" element={<h1>Nosotros</h1>} />
        <Route path="products" element={<ItemListContainer />} />
        <Route path="products/:id" element={<ItemDetail/>} />
  
      </Routes>

      
    </div>
  );
}

export default App;
