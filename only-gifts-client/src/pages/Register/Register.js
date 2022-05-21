import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../src/logo.png';
import { MdEmail, MdPassword, MdAccountCircle, MdSupervisedUserCircle } from "react-icons/md";
import { createNotification } from '../../services/notifications';

import { createUser } from '../../api/UserAPI';

const Register = () => {

  const addUser = async () => {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password:password
    };
    
    await createUser(userData).then((response) => {
      if(response.data === true) {
        createNotification(200,'¡Te has registrado correctamente!',true,'/login');
      } else {
        createNotification(201,'Correo ya registrado.',false,'');
      }
    });
    
  }
  
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
            <h3>¡Bienvenido!</h3>
            <p className="softText" >Ingresa tus datos para crear tu cuenta.</p>

            <Form>

            <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text ><MdEmail/></InputGroup.Text>
                <Form.Control size="lg" id='firstName' type="text" placeholder="Nombre(s)" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text ><MdEmail/></InputGroup.Text>
                <Form.Control size="lg" id='lastName' type="text" placeholder="Apellido(s)" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text ><MdEmail/></InputGroup.Text>
                <Form.Control size="lg" id='email' type="email" placeholder="Correo electrónico" />
              </InputGroup>

              <InputGroup className="mb-3" className="formControl">
                <InputGroup.Text ><MdPassword/></InputGroup.Text>
                <Form.Control size="lg" id='password' type="password" placeholder="Contraseña" />
              </InputGroup>

              <InputGroup size="lg" className="mb-3" className="formControl">
                <Button id="btnSign" onClick={() => {addUser()}}>Registrarse</Button>
              </InputGroup>

              <a href="/login" id="registerAccount" >Ingresar</a>

            </Form>
            
          </div>
      </div>
    </div>
  )
}

export default Register;