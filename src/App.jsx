import './App.css';
import { CartContextProvider } from './components/context/CartContext';
import CartPage from './components/MainComp/CartPage';
import CheckoutPage from './components/MainComp/CheckoutPage';
import LandingPage from './components/MainComp/LandingPage';
import ProductDetails from './components/MainComp/ProductDetails';
import ProductsPage from './components/MainComp/ProductsPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
        <CartContextProvider>
          <Routes>
              <Route path="/" element={<LandingPage/>} index />;
              <Route path="/products-page" element={<ProductsPage/>}/>;
              <Route path="/product-details/:id" element={<ProductDetails/>}/>;
              <Route path="/checkoutPage" element={<CheckoutPage/>}/>;
              <Route path="/checkoutPage/:id/:quantity?" element={<CheckoutPage/>}/>;
              <Route path="/cartPage/" element={<CartPage/>}/>; 
            </Routes>
        </CartContextProvider>
    </>
  )
}

export default App;
