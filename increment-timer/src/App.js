import { Timer } from "./component/Timer"
import { useState } from "react";
import './App.css';

function App() {
  const [show,setShow] = useState(false);
  return (
    <div className="App">
      <h1>Increment timer</h1>
      {show ? <Timer /> : null}
      <button onClick={()=>{setShow(!show)}} >{show ? "hide" : "show" }  </button>
  
    </div>
  );
}

export default App;
