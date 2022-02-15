import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDocs } from 'firebase/firestore'
import { docsByCategory, itemsCollection } from '../firebaseConfig'
import ItemList from './ItemList'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === '/') {
            // Todos los productos
            getDocs(itemsCollection).then((snapshot) => {
                let items = []
                snapshot.docs.forEach((doc) => {
                    items.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                })
                setProducts(items)
            })
        } else {
            // Products by category
            getDocs(docsByCategory(pathname.slice(1))).then((snapshot) => {
                let items = []
                snapshot.docs.forEach((doc) => {
                    items.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                })
                setProducts(items)
            })
        }
    }, [pathname]) //Con un array vacio le digo que esto pase cuando se renderize por primera vez y nada mas

    return (
        <div className="item-list-container">
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
