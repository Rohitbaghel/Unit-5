// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductsDetails } from './components/ProductsDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="*" element={<div>404 Page not found</div>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:producsDetail" element={<ProductsDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
