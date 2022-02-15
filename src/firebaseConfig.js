import { initializeApp } from 'firebase/app'
import { collection, doc, getFirestore, query, where } from 'firebase/firestore'

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}
//Inicializar Firebase app
const app = initializeApp(firebaseConfig)

// Iniciar servicios
export const db = getFirestore()

// Referencia a la coleccion
export const itemsCollection = collection(db, 'items')

//queries
export const docsByCategory = (category) => query(itemsCollection, where('category', '==', category))

export const docRefById = (id) => {
    return doc(db, 'items', id)
}
