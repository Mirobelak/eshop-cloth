import {initializeApp} from "firebase/app"
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore"

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

  console.log(firebaseApp)

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup =  () =>  signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect =  () =>  signInWithRedirect(auth, googleProvider)
  export const db = getFirestore();

  export const addCollectionAndDocumenest = async (collectionKey, objedctsToAdd) => {
        const collectionRef = collection(db, collectionKey)
        const batch = writeBatch(db)

        objedctsToAdd.forEach((object)=> {
          const docRef = doc(collectionRef, object.title.toLowerCase())
          batch.set(docRef, object);
        })

        await batch.commit()
        console.log("Done");
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)
    const querrySnapshot = await getDocs(q)
    return querrySnapshot.docs.map(docSnapshot => docSnapshot.data())

  }

  export const createUsedDocFromAuth =  async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, "users", userAuth.uid)
    


    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            }) }
        catch(error) {
                console.log(error.message)
        }
       
    }
    return userDocRef;

  }

  export const createAutUserWitEmalAndPassword = async (email, password) => {
    if(!email || !password) return ;

    return await createUserWithEmailAndPassword(auth, email, password)
  }
  export const SignInrWitEmalAndPassword = async (email, password) => {
    if(!email || !password) return ;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth)

  export const onAuthStateChangeListener =  (callback) => onAuthStateChanged(auth, callback )