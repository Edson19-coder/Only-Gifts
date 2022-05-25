import React,{useContext} from 'react'
import SideNavBar from '../../../components/SideNavBar/SideNavBar';
import ContextAdmin from "../../../context/AdminContext";
import { useNavigate } from 'react-router-dom';

import { AiFillSave, AiOutlineLogout } from "react-icons/ai";

const ManagerAjustes = () => {

  const {logOut} = useContext(ContextAdmin);
  const navigate = useNavigate();

  const handlerSalir = ()=>{
    logOut();
    navigate("/manager/login")
  }

  return (
    <div>
        <SideNavBar>
           <div className="container">
              <div className="row">
                  <div className="col-8 h2">
                          Ajustes
                    </div>  
                  <div className="col-4">
                   <div className="d-flex flex-row-reverse">
                   <button className="btn btn-danger" onClick={handlerSalir} >
                      Salir
                      <AiOutlineLogout style={{marginLeft:"5px"}} />
                    </button>
                   </div>
                  </div>
            
              </div>
              
              <div className="row mt-3 bg-white rounded-3 shadow p-4 ">
                <div className="col-6 h4 mb-3"> Usuario </div>
                <div className="col-6 h4 mb-3 d-flex flex-row-reverse "> 
                  <button className="btn btn-primary" > Guardar <AiFillSave style={{marginLeft:"5px"}} /> </button>
                </div>
                <div className="col-12  text-muted">
                  <label className="form-label" htmlFor="name">Nombre</label>
                    <input type="text" id="name" className="form-control " />
                 </div>
                 <div className="col-12 col-sm-6 mt-2 text-muted"> 
                 <label className="form-label" htmlFor="userName">Nombre de usuario</label>
                    <input type="text" id="name" className="form-control " />
                 </div>
                 <div className="col-12 col-sm-6 mt-2 text-muted"> 
                 <label className="form-label" htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" className="form-control " />
                 </div>
              </div>

              <div className="row mt-3 bg-white rounded-3 shadow p-4 ">
                <div className="col-6 h4 mb-3"> Cambiar contraseña </div>
                <div className="col-6 h4 mb-3 d-flex flex-row-reverse "> 
                  <button className="btn btn-primary" > Guardar <AiFillSave style={{marginLeft:"5px"}} /> </button>
                </div>
                <div className="col-6  text-muted">
                  <label className="form-label" htmlFor="current">Contraseña actual</label>
                    <input type="password" id="current" className="form-control " />
                 </div>
                 <div className="col-6  text-muted">
                 </div>
                 <div className="col-12 col-sm-6 mt-2 text-muted"> 
                 <label className="form-label" htmlFor="newPassword">Nueva contraseña</label>
                    <input type="password" id="newPassword" className="form-control " />
                 </div>
                 <div className="col-12 col-sm-6 mt-2 text-muted"> 
                 <label className="form-label" htmlFor="confirm">Confirmar contraseña</label>
                    <input type="password" id="confirm" className="form-control " />
                  
                 </div>
              </div>

              <div className="row mt-3 bg-white rounded-3 shadow p-4 ">
                <div className="col-12 h4 mb-3"> Detalles </div>
                <div className="col-12 col-sm-6 text-muted"> Versión de Only Gifts Manager 
                  <div className="text-black" style={{fontSize:"0.8rem"}} >1.0</div>
                </div>
              </div>
           </div>
        </SideNavBar>
    </div>
  )
}

export default ManagerAjustes;