import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './component/Navbar';
import Cart from './component/cart';
import Products from './component/Products';
import Home from './component/Home';
import Footer from './component/footer/Footer';
import AllProducts from './component/AllProducts';
function App() {
  return (
    <div className="App">
      <Navbarr />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          {/* <Route path='/products' element={<Products />}>Products</Route> */}
          <Route path='/Cart' element={<Cart />}>Products</Route>
          <Route path='/all' element={<AllProducts />}>Products</Route>



        </Routes>
    </div>
  );
}

export default App;
