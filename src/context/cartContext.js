import React, { useState, useEffect, createContext } from 'react'


export const CartContext = createContext({})

const CartProvider = ({ children }) => {


    console.log(localStorage.getItem('cart')) 

    const [ cart, setCart ] = useState(
        //Primero nos fijamos si hay algo en el localStorage con la key 'cart', si no hay nada inicializamos un Array vacio.
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))  : []
    )

    //Agrega un nuevo item dejando lo que ya estaba en el cart
    const addItem = (item, quantity) => {

        setCart([
            ...cart,
            {
                ...item,
                quantity
            }
        ])

        localStorage.setItem('cart', JSON.stringify([
            ...cart,
            {
                ...item,
                quantity
            }
        ]) )
    }
    //Remueve producto del carrito por su ID
    const removeItem = (itemId) => {

        console.log({itemId})

        //Filtramos todos los productos excepto el que tenga el id que nos pasen
        const cartFiltrado = cart.filter( ( item ) => item.id !== itemId )

        console.log({cartFiltrado})

        setCart( cartFiltrado )

        localStorage.setItem('cart', JSON.stringify( cartFiltrado ) )
    }
    //Limpia el carrito siempre y cuando el carrito tenga algo, 
    const clear = () => {

        if(cart.length !== 0) {
            setCart([])
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }
    //Devuelve true o false de si estan el carrito o no.
    const isInCart = (itemId) => {

        return cart.find(e => e.id === itemId) ? true : false
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart  }} >
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider
