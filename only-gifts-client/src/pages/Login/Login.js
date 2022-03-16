import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../src/logo.png';
import { MdEmail, MdPassword } from "react-icons/md";

import './Login.css';

const Login = () => {
  return (
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
            <p className="softText" >Ingresa tus datos para acceder a tu cuenta.</p>

            <Form>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
                <Form.Control size="lg" type="email" placeholder="Correo electrónico" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text id="basic-addon1"><MdPassword/></InputGroup.Text>
                <Form.Control size="lg" type="password" placeholder="Contraseña" />
              </InputGroup>

              <InputGroup size="lg" className="mb-3" className="formControl">
                <Button id="btnSignIn">Ingresar</Button>
              </InputGroup>

              <div className="formControl">
                <p className="softText" >¿Olvidaste tu contraseña?</p>
                <a href='#' id="resetPassword">Restablecer la contraseña</a>
              </div>

            </Form>
            
          </div>
      </div>
    </div>
  )
}

export default Login;