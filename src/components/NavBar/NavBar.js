import { Link } from 'react-router-dom'
//Componentes
import CartWidget from './CartWidget.js'
//CSS
import './NavBar.css'

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="gaming">Gaming</Link>
                    </li>
                    <li>
                        <Link to="computacion">Computación</Link>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    )
}

export default NavBar
