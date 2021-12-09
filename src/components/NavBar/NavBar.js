import "./NavBar.css"
import CartWidget from "./CartWidget.js"

function NavBar(){
    return (
        <nav className="nav">
            <div>Inicio</div>
            <div>Tienda</div>
            <CartWidget/>
        </nav>
        
    )
}

export default NavBar
