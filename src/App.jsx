import {Route, Routes} from "react-router-dom"
import Navigation from "./routes/navigation/Navigation"
import Home from "./routes/home/HomeComp"
import SIgnIn from "./routes/signin/SIgnIn"


function Shop(){
  return (
    <h1>I am Shop</h1>
  )
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="signin" element={<SIgnIn/>}/>

        </Route>
   
  
  </Routes>
   );
}

export default App;