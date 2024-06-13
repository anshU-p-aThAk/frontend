import './App.css';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kid_banner from "./components/assets/banner_kids.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop></Shop>} />
          <Route path="/men" element={<ShopCategory banner = {men_banner} category="men"></ShopCategory>} />
          <Route path="/women" element={<ShopCategory category="women" banner = {women_banner}></ShopCategory>} />
          <Route path="/kids" element={<ShopCategory category="kid" banner = {kid_banner}></ShopCategory>} />
          <Route path='product' element={<Product></Product>}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup></LoginSignup>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
