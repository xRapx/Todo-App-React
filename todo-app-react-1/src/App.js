
import { useEffect, useState } from "react";
import "./App.css"
import Wrapper from "./components/TodoApp/Wrapper";
import Switch from "react-switch";


function App() {
  const [themes, setThemes] = useState("#ffc100")
  useEffect(() =>{
      document.body.style.backgroundColor = themes
  },[themes])

  const handleChange = () => {
      setThemes(theme => theme === "#ffc100" ? "#5abcd8" : "#ffc100" );
  }
  


  return (
      <div className="app" >
      
        <span className="span-text">{themes === "#ffc100" ? "SunShine Mod" : "Water Mod"}</span>   
        <Switch className="switch" onChange={handleChange}  checked={themes === "#5abcd8"}/> 
        {/* Todo Component */}
        <Wrapper />   

      </div>
  );
}

export default App;
