import {
    Routes,
    Route
} from "react-router-dom";

import React from 'react'

import Dashboard from '../pages/Dashboard/Dashboard'
import OrdersHistoryManager from '../pages/OrdersHistoryManager/OrdersHistoryManager'
import OrdersManager from '../pages/OrdersManager/OrdersManager'
import ProductsManager from '../pages/ProductsManager/ProductsManager'

import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { MdHistoryToggleOff, MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaProductHunt } from 'react-icons/fa';

import Home from '../pages/Home/Home';
import './Manager.css';
import { Container } from "react-bootstrap";

const Manager = () => {

    const toggleButtonSideBar = async () => {
        var element = document.getElementById("sidebar");
        element.classList.toggle("active");
    }

  return (

    <div className="wrapper">

        <nav id="sidebar">
            <Container>
            <ul className="list-unstyled components">
                <li>
                    <a href="/manager/orders"><FiPackage /> Pedidos</a>
                </li>
                <li>
                    <a href="/manager/orders-history"><MdHistoryToggleOff /> Historial</a>
                </li>
                <li>
                    <a href="/manager/products"><FaProductHunt /> Productos</a>
                </li>
                <li>
                    <a href="/manager/dashboard"><MdOutlineSpaceDashboard />  Dashboard</a>
                </li>
            </ul>
            </Container>
        </nav>

        <div id="content">
            <nav className="navbar navbar-expand-lg" id="bg-custom-sb">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" onClick={toggleButtonSideBar}>
                        <span><AiOutlineMenuUnfold /></span>
                    </button>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="orders" element={<OrdersManager />} />
                    <Route path="orders-history" element={<OrdersHistoryManager />} />
                    <Route path="products" element={<ProductsManager />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Routes>
        </div>

    </div>
    )
}

export default Manager