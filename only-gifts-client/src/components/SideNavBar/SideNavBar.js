import React,{useContext, useState} from 'react';
import logo from "../../pages/src/logo.png";
import Context from '../../context/AdminContext';
import ContextAdmin from "../../context/AdminContext";
import {Link} from "react-router-dom";

import { BsLayoutSidebarInset } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { HiDocumentText } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";

import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {faFeather,faRightToBracket,faFileLines,faWandMagicSparkles,faChartLine,faAngleRight,faDisplay,faClipboardCheck} from "@fortawesome/free-solid-svg-icons"

const SideNavBar = ({children}) => {

  const {user,expand,setExpand} = useContext(Context)
  const {logOut} = useContext(ContextAdmin);
  const handlerSalir = ()=>{
    localStorage.clear();
    window.location = '/manager/login';
  }

  return (
    
    <div className="d-flex" >
        <div className="navbarside" style={{width:`${!expand? "14rem":"4rem"}`}} >
          <Link to="/manager/home" className="d-block logo-navbar decorate-none">
              <div className="containerImg">
                <img src={logo} width={!expand?100:50} alt="" />
              </div>
              <div className="text-muted fw-bolder " style={{fontSize:"0.7rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}} >Dashboard</div>
          </Link>
          <div className="m-0 hr" ></div>
          <div className="d-block px-2">
            <div className="d-flex flex-column" >
              <Link to="/manager/content" className={`nav-btn text-gray rounded-3 mt-3 decorate-none  ${expand ? "text-center" :"" } ` }>
                <IoIosAddCircle style={{marginRight:"5px"}} />
                {!expand && "Administrar Contenido"}
              </Link>
              <Link to="/manager/purchases" className={`nav-btn text-gray rounded-3 decorate-none  ${expand ? "text-center" :"" } ` }>
                <BiPurchaseTagAlt style={{marginRight:"5px"}} />
                {!expand &&  "Administrar Ventas"}
              </Link>
              <Link to="/manager/ventas" className={`nav-btn text-gray rounded-3 decorate-none  ${expand ? "text-center" :"" } ` }>
                <GoGraph style={{marginRight:"5px"}} />
                {!expand &&  "Historial de Ventas"}
              </Link>
              
              {
                !expand ?
                <div className="div-nav-btn text-gray" >General</div> :
                <div className="m-0 hr" ></div>
              }
              <div className={`nav-btn text-gray rounded-3 decorate-none  ${expand ? "text-center" :"" } ` }>
                <HiDocumentText style={{marginRight:"5px"}} />
                {!expand && "Documentación"}
              </div>
              <div onClick={handlerSalir} className={`nav-btn text-gray rounded-3 decorate-none  ${expand ? "text-center" :"" } ` }>
                <FA icon={faRightToBracket} style={{marginRight:"5px"}} ></FA>
                {!expand && "Salir"}
              </div>
             
            </div>
            
          </div>
          <div className="nav-foot p-2  text-gray d-flex justify-content-between align-items-center" >
                <div className="d-flex" style={{cursor:"pointer"}} >
                <div  className="circle text-center text-white" ><div className="account">{user[0].toUpperCase()}</div></div> { !expand && user}
                </div>
                 <button onClick={()=>setExpand(!expand)} className="rounded-circle border border-2 text-center btn btn-secondary  "><BsLayoutSidebarInset rotation={expand? 0:180} /></button>
              </div>
        </div>
        <div className=" flex-1 bg-light d-flex flex-column">
            <div className="p-5">
             
              {children}
            </div>
        </div>
    </div>
  )
}

export default SideNavBar;