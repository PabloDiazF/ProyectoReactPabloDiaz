import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { productsList } from '../data';
import ItemCount from './ItemCount';


const ItemDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const specificProduct = productsList.find(e => e.id == id)

        setProduct(specificProduct)
    }, [])





    return (
        <div>
            <h1>Item Detail</h1>
            <hr />
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.image} alt="" />
            <ItemCount stock={ product.stock } />
        </div>
    )
}

export default ItemDetail
