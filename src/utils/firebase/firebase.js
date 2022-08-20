import {initializeApp} from "firebase/app"
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, Firestore, collection} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAMRJ8ZBJrgDtXuFUWlp_a5eI8I69Y-E5I",
    authDomain: "clothing-db-cf73d.firebaseapp.com",
    projectId: "clothing-db-cf73d",
    storageBucket: "clothing-db-cf73d.appspot.com",
    messagingSenderId: "563596418006",
    appId: "1:563596418006:web:d36aebd419e8bdae7d2277"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth =   getAuth()
  export const signInWithGooglePopup =  () =>  signInWithPopup(auth, provider)
  export const db = getFirestore();

  export const createUsedDocFromAuth =  async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid ) 

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,email, createdAt
            }) }
        catch(error) {
                console.log(error.message)
        }
       
    }
    return userDocRef;

  }
