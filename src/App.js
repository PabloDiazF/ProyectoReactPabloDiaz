import './App.css';
import NavBar from './components/NavBar/NavBar';

import ItemCount from "./components/NavBar/ItemCount"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount initialValue={0}/>
    </div>
  );
}

export default App;
