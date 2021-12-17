import React, { useState, useEffect } from 'react'
import Producto from './Producto'

const ContenedorProductos = () => {
    
    const [ productos, setProductos ] = useState([]);

    
    const promesa = new Promise( ( resolve, rechazo ) => {

        let flag = true;

        setTimeout(() => {

            let productsList = [
                {
                    nombre: 'Camisa',
                    precio: 50,
                    stock: 10
                },
                {
                    nombre: 'Pantalon',
                    precio: 100,
                    stock: 20
                },
            ];

            flag ? resolve(productsList) : rechazo("Che, fallo promesa");

        }, 2500);

    });


    useEffect(() => {
            
        promesa
        .then((info) => {
            setProductos(info)
        })
        .catch(rechazo => console.log(rechazo))
    
    },[])//Con un array vacio le digo que esto pase cuando se renderize por primera vez y nada mas

    //Si no hay productos
    if( productos.length === 0 ){
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }
    
    //Si ya hay productos muestro los productos
    return (
        <div>
            {
                productos.map( p => (

                    <Producto 
                        nombre={p.nombre} 
                        precio={p.precio} 
                        stock={p.stock}
                        key={p.nombre}
                    />

                ) )
            }
        </div>
    )
}

export default ContenedorProductos