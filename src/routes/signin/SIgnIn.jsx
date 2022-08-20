import React from 'react'
import {signInWithGooglePopup, createUsedDocFromAuth} from "../../utils/firebase/firebase"

const SIgnIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
         const userDocRef = await createUsedDocFromAuth(user)    }
  return (
    <div>
        <h1>Sign In page</h1>
        <button onClick={logGoogleUser} >Sign in with Google</button>
    </div>
  )
}

export default SIgnIn