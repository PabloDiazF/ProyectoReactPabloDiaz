import { Routes, Route } from 'react-router-dom'
//PAGINAS
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import './App.css'

//FIREBASE
import './firebaseConfig.js'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="gaming" element={<ItemListContainer />} />
                <Route path="computacion" element={<ItemListContainer />} />
                <Route path="product/:id" element={<ItemDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
            </Routes>
        </div>
    )
}

export default App
