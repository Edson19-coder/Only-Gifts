import React from 'react'
import logo from './../../pages/src/logo4.png';

import { Button, Container, Nav, Navbar, Dropdown, Form } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="BgCustom" variant="light">
        <Container>
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
                    <a href="/login"><Button className="ButtonNavBar">Ingresar</Button></a>
                    <a href="/register"><Button className="ButtonNavBar">Registrarse</Button></a>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;