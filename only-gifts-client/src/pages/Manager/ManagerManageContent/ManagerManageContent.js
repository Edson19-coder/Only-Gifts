import React,{useCallback, useState} from 'react'
import DropZone from '../../../components/DropZone/DropZone'
import JSONInput from 'react-json-editor-ajrm';
import locale from "react-json-editor-ajrm/locale/es";
import sampleData from "./exampleData";
import SideNavBar from '../../../components/SideNavBar/SideNavBar';

import { FaFeatherAlt, FaCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ManagerManageContent = () => {


 const onDrop = useCallback((files)=>{
  console.log(files);
 })

 const [modal,setModal] = useState(false)
    
    

  return (
    <div>
        <SideNavBar>
       
        
        <div className="container">
              <div className="row">
                  <div className="col-12 h2">
                          Administrar Contenido
                  </div>
                 
              </div>  

              <div className="row mt-3 bg-white rounded-3 shadow p-4 ">
                  <div className="col-6 h4 mb-3"> Productos </div>
                  <div className="col-6 h4 mb-3 d-flex flex-row-reverse "> 
                    <button onClick={()=>{setModal(true)}} className="btn btn-primary" > Agregar Nuevo <IoIosAddCircle style={{marginLeft:"5px"}} /> </button>
                  </div>

                  <div className="col-12">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Estado</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Categoria</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-secondary">
                        <th scope="row"> <FaCircle className="text-success" /> Activo</th>
                        <td> SSD 500GB </td>
                        <td> $25 </td>
                        <td> Almacenamiento </td>
                        <td>
                          <button className="btn  btn-sm " style={{marginRight:"3px"}} ><AiFillEdit /></button>
                          <button className="btn btn-sm " ><AiFillDelete /></button>
                        </td>
                        
                      </tr>
                      <tr class="table-secondary">
                        <th scope="row"> <FaCircle className="text-danger" /> Desactivado</th>
                        <td> SSD 500GB </td>
                        <td> $25 </td>
                        <td> Almacenamiento </td>
                        <td>
                          <button className="btn  btn-sm " style={{marginRight:"3px"}} ><AiFillEdit /></button>
                          <button className="btn btn-sm " ><AiFillDelete /></button>
                        </td>
                        
                      </tr>
                      </tbody>
                      </table>
                  </div>
                </div>
           
        </div>
        </SideNavBar>
        {
          modal &&
          <div class="modal "  style={{display:"block",backgroundColor:"rgba(1,1,1,0.5)"}}>
          <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Agregar Producto</h5>
                <button type="button"onClick={()=>{setModal(false)}} class="btn-close"  aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div class="modal-body">
              <div className="row " >
                    
                      <div className="col-12 col-md-6">
                        <label htmlFor="name" className="form-label" >Nombre</label>
                        <input type="text" id="name" className="form-control " />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="price" className="form-label" >Precio</label>
                        <input type="number" id="price" className="form-control " />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="description" className="form-label" >Descripción</label>
                        <textarea rows={2} style={{resize:"none", height:"6rem"}}  id="description" className="form-control " />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="caracteristicas" className="form-label" >Características</label>
                        <JSONInput
                          placeholder={sampleData} // data to display
                          theme="light_mitsuketa_tribute"
                          locale={locale}
                          colors={{
                            string: "#DAA520" // overrides theme colors with whatever color value you want
                          }}
                          height="6rem"
                          width="auto"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="caracteristicas" className="form-label" >Categoría</label>
                        <select className="form-select" >
                        <option selected>Selecciona la categoria</option>
                        <option value="1">Ropa</option>
                        <option value="2">Vasos / Termos / Tazas</option>
                        <option value="2">Llaveros</option>
                        <option value="3">Oficina</option>
                        <option value="4">Mochilas / Morrales / Loncheras</option>
                        </select>

                        <div class="col-12 form-check form-switch" style={{margin: ".8rem 0rem"}}>
                          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <label class="form-check-label" for="flexSwitchCheckDefault">Imagen personalizada</label>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="caracteristicas" className="form-label" >Imagen</label>
                        <input type="file" style={{resize:"none"}}  id="caracteristicas" className="form-control " />
                      </div>
                      
                    </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Agregar <FaFeatherAlt style={{marginLeft:"5px"}} /></button>
                <button type="button" class="btn btn-secondary" onClick={()=>{setModal(false)}} >Close</button>
              </div>
            </div>
          </div>
        </div>
        }
    </div>
  )
}

export default ManagerManageContent;

//  