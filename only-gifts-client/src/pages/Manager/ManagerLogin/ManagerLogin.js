import React,{useState,useContext} from "react";
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../../src/logo.png';
import { useNavigate } from "react-router-dom";
import ContextAdmin from "../../../context/AdminContext";

import { MdEmail, MdPassword } from "react-icons/md";

import './ManagerLogin.css';

const AdminLogin = () => {

  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const {logIn} = useContext(ContextAdmin);

  const handleForm = (e)=>{
    e.preventDefault();
    //implementar con service/api
    logIn(user);
    navigate("/manager/home")
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container-sm items-align-center text-center col-6" id="container-global">
          <img
            src={logo}
            alt=""
            width="150"
            height="150"
            className="d-inline-block align-text-top"/>

            <div className="container-sm items-align-center text-center col-12" id="container-form">
              <br/>
              <h3>Bienvenido de nuevo</h3>
              <p className="softText" >Ingresa tus datos para acceder a tu cuenta de manager.</p>

              <form onSubmit={handleForm}>
                <div className="formControl input-group">
                  <span className="input-group-text" id="basic-addon1"><MdEmail/></span>
                  <input placeholder="Correo electrónico" type="email" className="form-control form-control-lg" onChange={(e)=>setUser(e.target.value)} value={user} />
                </div>

                <div className="formControl input-group">
                  <span className="input-group-text" id="basic-addon1"><MdPassword/></span>
                  <input placeholder="Contraseña" type="password" className="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
                </div>
                
                <div className="formControl input-group input-group-lg">
                  <button type="submit" id="btnSignIn" className="btn btn-primary">Ingresar</button>
                </div>
                
                <div className="formControl">
                <p className="softText">¿Olvidaste tu contraseña?</p>
                <a href="#" id="resetPassword">Restablecer la contraseña</a>
                </div>
              </form>
              
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;