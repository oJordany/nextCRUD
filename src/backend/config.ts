import firebase from "firebase"
import "firebase/firestore"

// Caso seja maior q 0 significa que foi inicializado
// Caso não tenha sido inicializado, o firebase.apps.length será 0
if(!firebase.apps.length){
    firebase.initializeApp({
        // Aqui nós passamos um objeto com os parâmetros:
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

// no final a gente exporta o firebase que a gente acabou de inicializar com a sua respectiva chave 
export default firebase