import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter,Routes,Route  } from "react-router-dom"

import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import ProductItem from './pages/ProductItem/ProductItem.js';
import Manager from './manager/Manager.js';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod.js';
import Address from './pages/Address/Address.js';
import History from './pages/History/History.js';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.js';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <>
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:productId" element={<ProductItem />} />
            <Route path="/payment-method" element={<PaymentMethod />} />
            <Route path="/address" element={<Address />} />
            <Route path="/orders-history" element={<History />} />
            <Route path="/cart" element={<ShoppingCart></ShoppingCart>} />
            {/* Manager */}
            <Route path="/manager/*" element={<Manager />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </>
  );
}

export default App;
