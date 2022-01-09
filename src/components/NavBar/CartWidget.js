import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi'

import { CartContext } from '../../context/cartContext';
//CSS
import './CartWidget.css'



function CartWidget () {

    //Leer del cart del estado global cual es length y ponerlo en un circulito rojo 
    const { cart } = useContext(CartContext)

    if(cart.length === 0) {
        return null

    } 
    return (
        <div className="cart-widget" >
            <Link to="cart">
                <div className='icon'>
                    <HiShoppingCart size="2rem" color='white'/>
                    <span>{cart.length}</span>
                </div>
            </Link>

        </div>
    )       
}

export default CartWidget;

