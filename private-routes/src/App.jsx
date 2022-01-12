
import './App.css';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { Navbar } from './components/navbar';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
