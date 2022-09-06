import React, { useState} from 'react'
import FormInput from "../form-input/FormInput"
import { signInWithGooglePopup, SignInrWitEmalAndPassword } from '../../utils/firebase/firebase'
import "./SignInForm.scss"
import Button from '../button/button'

const defaultFormFields = {
   
    email : "",
    password: "",
   
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields


    console.log(formFields);

    const resetFormField = () => {
      setFormFields(defaultFormFields)
    }

    const SignInWithGoogle = async () => {
      await signInWithGooglePopup();
         }

    const handleSubmit = async(event) => {
      event.preventDefault()
      
        try {
          const {user} = await SignInrWitEmalAndPassword(email, password )
          resetFormField()
        } catch(error) {
          switch(error.code) {
            case "auth/wrong-password": alert("Incorrect password")
            break
            case "auth/user-not-found": alert("No user with this email")
            break
            default: console.log(error)
          }
   
        }
      
       
    }
    
    const handleChange = (event) => {
         const {name, value} = event.target
         setFormFields({...formFields, [name]: value  })

    }
  return (
    <div className='sign-up-container' >
      
      <h2>Already have an account ? </h2>
    <span>SignUp with your email and password </span>
    <form onSubmit={handleSubmit}>
       
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
        <div className='buttons-container' >
        <Button type='submit'>Sign In</Button>
        <Button type="button" buttonType="google" onClick={SignInWithGoogle} >Google Sign In</Button>
        </div>    
    </form>
    </div>

  )
}

export default SignInForm