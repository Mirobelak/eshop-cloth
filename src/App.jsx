import { useEffect } from "react"
import {useDispatch} from "react-redux"
import {Route, Routes} from "react-router-dom"
import Navigation from "./routes/navigation/Navigation"
import Home from "./routes/home/HomeComp"
import Authentication from "./routes/authentication/authentication"
import Shop from "./routes/shop-page/shop"
import Checkout from "./routes/checkout/Checkout"
import { onAuthStateChangeListener,createUsedDocFromAuth } from "../src/utils/firebase/firebase";
import {setCurrentUser} from "./store/user/userAction"


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
        
    const unsubscribe  = onAuthStateChangeListener((user)=>{
      if(user) {
          createUsedDocFromAuth(user) 
      }
      dispatch(setCurrentUser(user))
      
     ;
    })
  return unsubscribe;
      }, [dispatch])
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        </Route>
  </Routes>
   );
}

export default App;