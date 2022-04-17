import {
    Routes,
    Route
} from "react-router-dom";

import React from 'react'

import './Manager.css';

import AdminContext,{ AdminProvider } from "../context/AdminContext";
import PrivateRouteAdmin from "../components/PrivateRouteAdmin/PrivateRouteAdmin";

import ManagerLogin from "../pages/Manager/ManagerLogin/ManagerLogin";
import HomePage from "../pages/Manager/HomePage/HomePage";
import ManagerAjustes from "../pages/Manager/ManagerAjustes/ManagerAjustes";
import ManagerManageContent from "../pages/Manager/ManagerManageContent/ManagerManageContent";
import ManagerVentas from "../pages/Manager/ManagerVentas/ManagerVentas";

const Manager = () => {

  return (
    <div>
        <AdminProvider> 
            <Routes>
                <Route path="/" >
                <Route path="home" element={<PrivateRouteAdmin > <HomePage/> </PrivateRouteAdmin>} />
                <Route path="ajustes" element={<PrivateRouteAdmin > <ManagerAjustes/> </PrivateRouteAdmin>} />
                <Route path="content" element={<PrivateRouteAdmin > <ManagerManageContent/> </PrivateRouteAdmin>} />
                <Route path="ventas" element={<PrivateRouteAdmin > <ManagerVentas/> </PrivateRouteAdmin>} />
                    <Route path="login" element={<ManagerLogin/>} ></Route>
                </Route>
            </Routes>
        </AdminProvider>
        <Routes>
            <Route element={<h1>Not found</h1>} />
        </Routes>
    </div>
    )
}

export default Manager;