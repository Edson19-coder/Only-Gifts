import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../src/logo.png';
import { MdEmail, MdPassword } from "react-icons/md";
import { createNotification } from '../../services/notifications';

import './Login.css';

import { authUser } from '../../api/UserAPI';

const Login = () => {

  const signIn = async () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userData = {
      email: email,
      password: password
  };

    await authUser(userData).then((response) => {
      if(response.status === 200) {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("shoppingCartId", response.data.shoppingCartId);
        window.location = '/';
      } else {
        createNotification(204,'Correo o contraseña incorrecta.')
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="container-sm items-align-center text-center col-6" id="container-global">
        <img
          src={logo}
          alt=""
          width="150"
          height="150"
          onClick={() => {window.location = '/'}}
          style={{cursor:"pointer"}}
          className="d-inline-block align-text-top"/>

          <div className="container-sm items-align-center text-center col-12" id="container-form">
            <br/>
            <h3>Bienvenido de nuevo</h3>
            <p className="softText" >Ingresa tus datos para acceder a tu cuenta.</p>

            <Form>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text ><MdEmail/></InputGroup.Text>
                <Form.Control size="lg" id='email' type="email" placeholder="Correo electrónico" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text ><MdPassword/></InputGroup.Text>
                <Form.Control size="lg" id='password' type="password" placeholder="Contraseña" />
              </InputGroup>

              <InputGroup size="lg" className="mb-3" className="formControl">
                <Button id="btnSign" onClick={() => {signIn()}}>Ingresar</Button>
              </InputGroup>

              <a href="/register" id="registerAccount">Registrarse</a>

            </Form>
            
          </div>
      </div>
    </div>
  )
}

export default Login;