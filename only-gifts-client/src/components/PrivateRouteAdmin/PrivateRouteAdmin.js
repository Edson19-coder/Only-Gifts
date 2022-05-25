import React,{useContext} from 'react'
import {Route,Navigate} from "react-router-dom"
import Context,{ AdminProvider } from '../../context/AdminContext';

const PrivateRouteAdmin = ({children}) => {

    const {isLoged} = useContext(Context);

    if(isLoged){
        return children
    }else{
        return <Navigate to="/manager/login" ></Navigate>
    }
}

export default PrivateRouteAdmin;