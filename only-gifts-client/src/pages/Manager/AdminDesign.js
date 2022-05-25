import React,{useCallback, useState} from 'react'
import SideNavBar from '../../components/SideNavBar'
import DropZone from '../../components/DropZone'
import DragSVG from "./../../assets/design.svg"
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {faRightToBracket,faCheck} from "@fortawesome/free-solid-svg-icons";

import AdminFondos from '../../components/AdminFondos';




const AdminDesign = () => {


  
 const onDrop = useCallback((files)=>{
  console.log(files);
 })

 const [fondo,setFondo] = useState(null);
 const [index,setIndex] = useState(1000);

  return (
    <div>
        <SideNavBar>
        <div className="container">
              <div className="row">
                  <div className="col-12 h2">
                          Diseñar
                  </div>  
                 
              </div>
            <div className="row mt-3 bg-white rounded-3 shadow p-4" >
            <div className="col-6 h4 mb-3"> Datos Generales </div>
                <div className="col-6 h4 mb-3 d-flex flex-row-reverse "> 
                  <button className="btn btn-primary" > Guardar <FA icon={faCheck} style={{marginLeft:"5px"}} ></FA> </button>
                </div>
              <div className="col-12 col-md-6 ">
                   <img className="design-size" src={DragSVG} alt="" />
                   
              </div>

              <div className="col-12 col-md-6 ">
              <div className="row">
                      <div className="col-12    text-muted">
                        <label className="form-label" htmlFor="name">Nombre de la empresa</label>
                        <input type="text" id="name" className="form-control " />
                      </div>
                      <div className="col-12 mt-3   text-muted">
                        <label className="form-label" htmlFor="about">Acerca de la empresa</label>
                       <textarea className="form-control" id="about" rows={5} style={{resize:"none"}} ></textarea>
                      </div>
                      <div className="col-12 mt-3  text-muted">
                        <label className="form-label" htmlFor="about">Logo de la empresa</label>
                        <DropZone onDrop={onDrop} accept={"image/*"} />
                      </div>
                    </div>
              </div>
              
                
            
              <div className="d-block text-muted mt-3 mb-3" style={{fontSize:"0.7rem"}}>
                     Actualiza los datos de la empresa que se mostraran a tus clientes.
                   </div>
                   
              
            </div>
            
            <div className="row mt-3 bg-white rounded-3 shadow p-4" >
              
              <div className="col-6 h4 mb-3"> Estilo de fondo de la página </div>
                <div className="col-6 h4 mb-3 d-flex flex-row-reverse "> 
                  <button className="btn btn-primary" > Guardar <FA icon={faCheck} style={{marginLeft:"5px"}} ></FA> </button>
                </div>
              <div className="col-12 mb-2 mt-2" style={{height:"150px"}} >
                <img src={fondo} height={150} style={{width:"100%",objectFit:"cover"}} alt="" />
              </div>
              <AdminFondos setFondo={setFondo} index={index} setIndex={setIndex} />
            </div>
        </div>
        </SideNavBar>
    </div>
  )
}

export default AdminDesign
