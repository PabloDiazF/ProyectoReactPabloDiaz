import  { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { productsList } from '../data'

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const promesa = new Promise( ( resolve, rechazo ) => {

            let flag = true;
    
            setTimeout(() => {
                
                flag ? resolve(productsList) : rechazo("Che, fallo promesa");
    
            }, 200);
    
        });

        promesa
        .then((info) => {
            setProducts(info)
        })
        .catch(rechazo => console.log(rechazo))
    
    },[])//Con un array vacio le digo que esto pase cuando se renderize por primera vez y nada mas


    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer