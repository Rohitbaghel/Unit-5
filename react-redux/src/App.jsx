// import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
// import { useState } from 'react';

import { Todos } from './component/Todos';
function App() {
  
  return (
    <div className="App">
     <Todos/>
    </div>
  );
}

export default App;
