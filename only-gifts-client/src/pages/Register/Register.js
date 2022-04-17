import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../src/logo.png';
import { MdEmail, MdPassword, MdAccountCircle, MdSupervisedUserCircle } from "react-icons/md";

const Register = () => {
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
            <h3>¡Bienvenido!</h3>
            <p className="softText" >Ingresa tus datos para crear tu cuenta.</p>

            <Form>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text id="basic-addon1"><MdAccountCircle/></InputGroup.Text>
                <Form.Control size="lg" type="text" placeholder="Nombre(s)" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text id="basic-addon1"><MdSupervisedUserCircle/></InputGroup.Text>
                <Form.Control size="lg" type="text" placeholder="Apellido(s)" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
                <Form.Control size="lg" type="email" placeholder="Correo electrónico" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text id="basic-addon1"><MdPassword/></InputGroup.Text>
                <Form.Control size="lg" type="password" placeholder="Contraseña" />
              </InputGroup>

              <InputGroup size="lg" className="mb-3" className="formControl">
                <Button id="btnSign">Registrarse</Button>
              </InputGroup>

              <a href="/login" id="registerAccount" >Ingresar</a>

            </Form>
            
          </div>
      </div>
    </div>
  )
}

export default Register;