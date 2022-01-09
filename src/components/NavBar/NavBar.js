import { Link } from "react-router-dom"
//Componentes
import CartWidget from "./CartWidget.js"
//CSS
import "./NavBar.css"

function NavBar(){

    return (
        <header >

        <Link to="/" className="logo">
          <span>Logo</span>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="about">Nosotros</Link>
            </li>
            <li>
              <Link to="products">Productos</Link>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </header>
        
    )
}

export default NavBar
