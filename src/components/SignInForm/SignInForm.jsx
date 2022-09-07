import React, { useState} from 'react'
import FormInput from "../form-input/FormInput"
import { signInWithGooglePopup, SignInrWitEmalAndPassword } from '../../utils/firebase/firebase'
import {SignUpContainer, Title, ButtonContainer} from "./SignInForm.styles"
import Button, {BUTTON_TYPE_CLASSES} from '../button/button'

const defaultFormFields = {
   
    email : "",
    password: "",
   
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const resetFormField = () => {
      setFormFields(defaultFormFields)
    }

    const SignInWithGoogle = async () => {
      await signInWithGooglePopup();
         }

    const handleSubmit = async(event) => {
      event.preventDefault()
      
        try {
          await SignInrWitEmalAndPassword(email, password )
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
    <SignUpContainer >
      
      <Title>Already have an account ? </Title>
    <span>SignUp with your email and password </span>
    <form onSubmit={handleSubmit}>
       
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
        <ButtonContainer >
        <Button type='submit'>Sign In</Button>
        <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle} >Google Sign In</Button>
        </ButtonContainer>    
    </form>
    </SignUpContainer>

  )
}

export default SignInForm