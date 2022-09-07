import { Outlet } from "react-router-dom";
import DirectoryComp from "../../components/directory/DirectoryComp";

function Home() {
  
  return (<div className="test">
    <DirectoryComp />
    <Outlet/>
  </div>
    
   );
}

export default Home;