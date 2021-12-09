import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/NavBar/ItemListContainer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensajito="aguante boca"/>
      <ItemListContainer mensajito="hoy se gana"/>
      <ItemListContainer mensajito="guarda talleres"/>
    </div>
  );
}

export default App;
