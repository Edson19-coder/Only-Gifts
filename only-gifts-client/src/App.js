import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductItem from './pages/ProductItem/ProductItem';
import Manager from './manager/Manager';
import NavBar from './components/NavBar/NavBar';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import Address from './pages/Address/Address';
import History from './pages/History/History';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product/:productId" element={<ProductItem />} />
          <Route path="payment-method" element={<PaymentMethod />} />
          <Route path="address" element={<Address />} />
          <Route path="orders-history" element={<History />} />
          <Route path="/cart" element={<ShoppingCart></ShoppingCart>} />
          {/* Manager */}
          <Route path="manager/*" element={<Manager />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
