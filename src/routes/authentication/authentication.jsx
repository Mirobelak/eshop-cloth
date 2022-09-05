import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./authentication.scss"

const Authentication = () => {
    
  
  return (
    <div className="auth-container" >
        
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
} 

export default Authentication