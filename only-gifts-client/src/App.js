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

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
