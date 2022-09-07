import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import {AuthContainer} from "./authentication.styles"

const Authentication = () => {
    
  
  return (
    <AuthContainer >
        
        <SignInForm/>
        <SignUpForm/>
    </AuthContainer>
  )
} 

export default Authentication