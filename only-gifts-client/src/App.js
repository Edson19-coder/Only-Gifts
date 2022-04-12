import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductItem from './pages/ProductItem/ProductItem';
import Manager from './manager/Manager';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="productItem" element={<ProductItem />} />
          {/* Manager */}
          <Route path="manager/*" element={<Manager />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
