import  { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { collection, getDoc, getFirestore } from 'firebase/firestore'
import { db } from 'firebase'

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {

        // const db = getFirestore();

        // const productRef = collection(db, "productos", "4dBm31tR1TNRmvvhqAdN");

        // getDoc(productRef).then( (snapshot) => {
        //     console.log(snapshot)
        //     if ( snapshot.exists()) {
        //         console.log(snapshot)
        //     }
        // }) 

        

        // const promesa = new Promise( ( resolve, rechazo ) => {

        //     let flag = true;
    
        //     setTimeout(() => {
                
        //         flag ? resolve(productsList) : rechazo("Che, fallo promesa");
    
        //     }, 200);
    
        // });

        // promesa
        // .then((info) => {
        //     setProducts(info)
        // })
        // .catch(rechazo => console.log(rechazo))
    
    },[])//Con un array vacio le digo que esto pase cuando se renderize por primera vez y nada mas


    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer