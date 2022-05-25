import React, { useContext, useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faCheck, faAdd, faPen, faTrashCan, faCircle } from "@fortawesome/free-solid-svg-icons"

import $ from 'jquery';
import SideNavBar from '../../../components/SideNavBar/SideNavBar';



const ManagerDocumentation = () => {

    const ABCProdAppend = async () => {
        
        $("#ToAppend").attr('style','display: block');
    };
    return (
        <div>
            <SideNavBar>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"><button type="button" onClick={() => { ABCProdAppend() }} className="btn btn-secondary">ABC Producto</button></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                    </table>
                    <div id='ToAppend' style={{ display: "none" }}>
                        <h1>Administrar contenido</h1>
                        <div className='section-content'>
                            <p> <strong> Definicion: </strong> Ventana desarrollada con el objetivo de administracion de productos para la pagina web.</p>
                            <p> En pantalla se mostrara una lista de todos los productos activados. Cada elemento mostrara ciertos elementos del producto tales como : Estado, nombre y categoria.</p>
                            <p> Del costado derecho de cada elemento apareceran 3 botones de accion. <FA icon={faPen} ></FA> (Editar producto), <FA icon={faTrashCan} ></FA> (Borrar producto) y
                                 <button style={{ marginLeft: '5px' }} className='btn btn-primary disabled' > Agregar Nuevo <FA icon={faAdd} style={{ marginLeft: '5px' }} ></FA> </button> Agregar Prodcuto. </p>
                        </div>
                        <h6 className='alert alert-dark' role='alert'><FA icon={faPen} ></FA> Editar producto y <button style={{ marginLeft: '5px' }} className='btn btn-primary disabled' > Agregar Nuevo <FA icon={faAdd} style={{ marginLeft: '5px' }} ></FA> </button> Agregar Prodcuto</h6>
                        <p className='px-5'> <strong> Campos a llenar: </strong> </p>
                        <div className='px-5'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Campo</th>
                                        <th scope='col'>Definicion</th>
                                        <th scope='col'>Valores</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='col'>Nombre</th>
                                        <th scope='col'>Se ingresa el nombre del producto</th>
                                        <th scope='col'>Alfanumericos</th>
                                    </tr>
                                    <tr>
                                        <th scope='col'>Precio</th>
                                        <th scope='col'>Producto</th>
                                        <th scope='col'>Numeros</th>
                                    </tr>
                                    <tr>
                                        <th scope='col'>Categoria</th>
                                        <th scope='col'>Se muestra un dropdown en el cual se proporciona las categorias disponibles.</th>
                                        <th scope='col'>Varia dependiendo de las categorias disponibles</th>
                                    </tr>
                                    <tr>
                                        <th scope='col'>Características</th>
                                        <th scope='col'>Se ingresa un json con las caracteristicas del producto. Nota: Se recomienda seleccionar primero una categoria, ya que se muestra un ejemplo en este apartado de las caracteristicas recomendadas</th>
                                        <th scope='col'>Texto estilo JSON</th>
                                    </tr>
                                    <tr>
                                        <th scope='col'>Imagen</th>
                                        <th scope='col'>Se carga la imagen que tendra el producto.</th>
                                        <th scope='col'>jpeg, jpg, y png</th>
                                    </tr>


                                </tbody>
                            </table>
                            <p> Dependiendo del resultado en el proceso, se mostrara una notification con un mensaje de respuesta.</p>

                        </div>
                        <h6 className='alert alert-dark' role='alert'><FA icon={faTrashCan} ></FA> Borrar producto</h6>
                        <div className='px-5'>
                            <p> Se da clic en el boton y se realiza el proceso de baja del producto. </p>
                            <p>  Dependiendo del resultado en el proceso, se mostrara una notification con un mensaje de respuesta. </p>

                        </div>

                    </div>
                </div>
            </SideNavBar>

        </div>
    );
}

export default ManagerDocumentation;