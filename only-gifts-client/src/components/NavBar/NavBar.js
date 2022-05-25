import React from 'react'
import logo from './../../pages/src/logo4.png';

import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import { Button, Container, Nav, Navbar, Dropdown, Form, DropdownButton } from 'react-bootstrap';
import { MdSearch, MdAccountCircle, MdHistory, MdLogout, MdOutlineSpaceDashboard, MdHistoryToggleOff } from 'react-icons/md';
import { FaPager, FaAddressBook, FaProductHunt } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { FiPackage } from 'react-icons/fi';

import './NavBar.css';

var userId = localStorage.getItem("userId");
var role = localStorage.getItem("role");

const NavBar = ({ children }) => {

    return (
        <div  >
            <Navbar collapseOnSelect expand="lg" bg="light" className="BgCustom" variant="light">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{textAlign:"end"}}/>
                <Navbar.Collapse id="responsive-navbar-nav" style={{textAlign:"end"}}>

                    <Nav style={{textAlign:"end"}}>
                        {!userId ? (
                            <>
                                <a href="/login"><Button className="ButtonNavBar">Ingresar</Button></a>
                                <a href="/register"><Button className="ButtonNavBar">Registrarse</Button></a>
                            </>
                        ): <UserLoged/>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div>
                {children}
            </div>
        </div>

    )
}

function UserLoged() {
    if(role == 'MANAGER') {
        return(
            <>
             <a href="/manager/login"><Button className="ButtonNavBar">Manager</Button></a>
            </>
        );
    } else {
        return(
            <>
            <li className="nav-item zoom car">
              <a className="nav-link" href="/cart"><span style={{ paddingLeft: "2px" }}><FA icon={faCartShopping} ></FA> <span className='texts'></span></span> </a>
            </li>
            
            <DropdownButton
                title="Mi cuenta"
                id="my-account"
                align="end"
                className="ButtonNavBar"
            >
                <Dropdown.Item href="orders-history"><MdHistory /> Pedidos</Dropdown.Item>
                <Dropdown.Item href="payment-method"><FaPager /> Metodos de pago</Dropdown.Item>
                <Dropdown.Item href="address"><FaAddressBook /> Direcciónes de envío</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => signOut()}><MdLogout /> Salir</Dropdown.Item>
            </DropdownButton>
            </>
        );
    }
}

function signOut() {
    localStorage.clear();
    window.location.reload();
}

export default NavBar;