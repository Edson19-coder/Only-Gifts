import React from 'react'
import { Link } from 'react-router-dom'
import SideNavBar from '../../../components/SideNavBar/SideNavBar';

import { FaFeatherAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
         <SideNavBar>
        <div className="container">
              <div className="row">
                  <div className="col-12 h2">
                          Bienvenido 👋
                  </div>  
                  <div className="col-12 h6 text-muted mt-1">
                         Esperamos que la creación de tu tienda en línea sea la mejor. Siéntase libre  <br />
                         de acceder cuando quiera y configurar su web a su gusto.
                  </div>  
                  <div className="col-12 mt-2">
                    <Link to="/admin/content" className="btn btn-primary" > Agregar producto  <FaFeatherAlt /> </Link>
                  </div>
                 
              </div>
            <div className="row mt-5 " >
              <div className="col-12">
               <Link to="/admin" style={{width:"300px"}} className=" align-items-center  decorate-none d-flex justify-content-between bg-white rounded-3 h4 shadow p-4">
                    <div className="d-flex align-items-center" > <FaFeatherAlt className="text-white bg-primary p-2 rounded-3 " style={{marginRight:"2px",fontSize:"1rem"}} /> Documentación</div> <FaFeatherAlt />
               </Link>
               <Link to="/admin/design" style={{width:"300px"}} className=" align-items-center  decorate-none d-flex justify-content-between bg-white rounded-3 h4 shadow p-4">
                    <div className="d-flex align-items-center" > <FaFeatherAlt className="text-white bg-primary p-2 rounded-3 " style={{marginRight:"2px",fontSize:"1rem"}} /> Diseñar</div> <FaFeatherAlt />
               </Link>
              </div>
          


              
            </div>
        </div>
        </SideNavBar>
            
        
    </>
  )
}

export default HomePage