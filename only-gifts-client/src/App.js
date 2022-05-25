import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StorageProvider, FirebaseAppProvider } from "reactfire";

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

const firebaseConfig = {
  apiKey: "AIzaSyDxk0BD3xP1B7fc0DkyYTSBGJQZ37CfTBw",
  authDomain: "only-gifts-c3df7.firebaseapp.com",
  projectId: "only-gifts-c3df7",
  storageBucket: "only-gifts-c3df7.appspot.com",
  messagingSenderId: "594315503137",
  appId: "1:594315503137:web:f451ab8fae5d9d95292560"
};

function App() {
  return (
    <>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} >
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
      </FirebaseAppProvider>
    </>
  );
}

export default App;
