import React from 'react'
import logo from './../../pages/src/logo4.png';

import { Button, Container, Nav, Navbar, Dropdown, Form, DropdownButton } from 'react-bootstrap';
import { MdSearch, MdAccountCircle, MdHistory, MdLogout, MdOutlineSpaceDashboard, MdHistoryToggleOff } from 'react-icons/md';
import { FaPager, FaAddressBook, FaProductHunt } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { FiPackage } from 'react-icons/fi';

import './NavBar.css';

const NavBar = () => {
  return (
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-categories">
                        Categorias
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>

            <Nav className="m-auto searchContainer">
                <Form.Control id="inputSearch" placeholder="Buscar..." aria-label="Search" aria-describedby="inputGroup-sizing-sm"/>
                <a href='#' id="searchIconNavBar"><MdSearch className="search-icon m-auto" /></a>
            </Nav>

            <Nav>
                {/*<a href="/login"><Button className="ButtonNavBar">Ingresar</Button></a>
                <a href="/register"><Button className="ButtonNavBar">Registrarse</Button></a>*/}
                <DropdownButton
                    title="Mi cuenta"
                    id="my-account"
                    align="end"
                    className="ButtonNavBar"
                >
                    {/* CLIENTE */}
                    {/*<Dropdown.Item href="#"><MdAccountCircle /> Mi cuenta</Dropdown.Item>
                    <Dropdown.Item href="#"><MdHistory /> Pedidos</Dropdown.Item>
                    <Dropdown.Item href="#"><FaPager /> Metodos de pago</Dropdown.Item>
                    <Dropdown.Item href="#"><FaAddressBook /> Direcciónes de envío</Dropdown.Item>*/}
                    {/* ADMIN */}
                    <Dropdown.Item href="/manager"><GrUserManager /> Manager</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/manager/orders"><FiPackage /> Pedidos</Dropdown.Item>
                    <Dropdown.Item href="/manager/orders-history"><MdHistoryToggleOff /> Historial</Dropdown.Item>
                    <Dropdown.Item href="/manager/products"><FaProductHunt /> Productos</Dropdown.Item>
                    <Dropdown.Item href="/manager/dashboard"><MdOutlineSpaceDashboard /> Dashboard</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#"><MdLogout /> Salir</Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;