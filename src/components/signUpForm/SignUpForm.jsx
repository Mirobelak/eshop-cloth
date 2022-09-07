import React, { useState} from 'react'
import FormInput from "../form-input/FormInput"
import { createAutUserWitEmalAndPassword, createUsedDocFromAuth } from '../../utils/firebase/firebase'
import {SignUpContainer, Title} from "./SignUpForm.styles"
import Button from '../button/button'

const defaultFormFields = {
    displayName: "",
    email : "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields


    

    const resetFormField = () => {
      setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
      event.preventDefault()
      if(password !== confirmPassword) 
      {
      alert("passwords do not match")
      return;
      }

      
        try {

          const {user} =  await createAutUserWitEmalAndPassword(email, password)
     
          
          await createUsedDocFromAuth(user, {displayName})
          resetFormField()
  
        } catch(error) {
          if (error.code === "auth/email-already-in-use" ) {
            alert("Same EMAIL")
          } else {
                console.log("user creation failed ", error);
          }
          
      }
      
       
    }
    
    const handleChange = (event) => {
         const {name, value} = event.target
         setFormFields({...formFields, [name]: value  })

    }
  return (
    <SignUpContainer >
      <Title>Dont have an account ? </Title>
    <span>SignUp with your email and password </span>
    <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
        <FormInput label="Confirm password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        <Button type='submit'>Submit</Button>
    </form>
    </SignUpContainer>

  )
}

export default SignUpForm