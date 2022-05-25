import React, { useCallback, useState, useEffect } from 'react'
import swal from 'sweetalert';
import sampleData from "./exampleData";
import SideNavBar from '../../../components/SideNavBar/SideNavBar';
import { createNotification } from "../../../services/notifications";

import { FaFeatherAlt, FaCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { addProduct, getProductsManager, uploadImage, dropProduct, changeStatusProduct } from '../../../api/ProductAPI';
import ProductManager from '../../../components/ProductManager/ProductManager';

var token = localStorage.getItem("token");

const ManagerManageContent = () => {

  const [modal, setModal] = useState(false)
  const [products, setProduct] = useState([]);

  useEffect(() => {

    getProductsManager(token).then(res => {
      var products = [];
      if (res) {
        products = res.data.productList;
      }
      setProduct(products);
    }).catch(err => {
      console.log(err);
    });

  }, [products])


  const createProduct = async () => {
    var productCharacteristics = document.getElementById("characteristic").value;
    var productData = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      characteristic: productCharacteristics.split("\n").join(""),
      price: document.getElementById("price").value,
      categoryId: parseInt(document.getElementById("categorySelect").value),
      customImage: document.getElementById('flexSwitchCheckDefault').checked ? 1 : 0,
      image: "default.jpg"
    };

    await addProduct(productData, token).then(async (response) => {
      if (response.status === 201 && response.data !== undefined) {
        var formData = new FormData();
        const imagefile = document.getElementById("formFileSm");
        formData.append("image", imagefile.files[0]);
        formData.append("productId", response.data);
        await uploadImage(formData, token).then((response) => {
          if (response.status === 200) {
            createNotification(200, "Producto creado correctamente.", false, "");
            setModal(false)
          } else {
            createNotification(500, "No se pudo crear el producto correctamente.", false, "");
          }
        });
      }
    });
  };

  const dProduct = async (e) => {
    var productId = e.currentTarget.getAttribute("data-productId");

    swal({
      title: "¡Alerta!",
      text: "¿Estas seguro que quieres eliminar el producto?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        var productData = {
          productId: parseInt(productId)
        };
        dropProduct(productData, token).then((response) => {
          if(response.status === 200) {
            createNotification(200,"Producto borrado correctamente.",false, "/manager/content");
          }
        });
      }
    })

  };

  const cStatusProduct = async (e) => {
    var productId = e.currentTarget.getAttribute("data-productId");
    var status = e.currentTarget.getAttribute("data-status");
    var productData = {
      productId: parseInt(productId),
      status: status === 'A' ? 'D' : 'A'
    };
    await changeStatusProduct(productData,token).then((response) => {
      console.log(response.status);
    });
  };

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
              <button onClick={() => { setModal(true) }} className="btn btn-primary" > Agregar Nuevo <IoIosAddCircle style={{ marginLeft: "5px" }} /> </button>
            </div>

            <div className="col-12">
              <table className="table table-hover">
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
                  {products ? products.map((item) => (
                    <ProductManager modal={setModal} data={item} onClickChangeStatus={cStatusProduct} onClickDrop={dProduct} /*onChangeFunction={getPurchaseId}*/ />
                  )) : console.log(products)}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </SideNavBar>
      {
        modal &&
        <div className="modal " style={{ display: "block", backgroundColor: "rgba(1,1,1,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered modal-lg " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Producto</h5>
                <button type="button" onClick={() => { setModal(false) }} className="btn-close" aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
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
                    <textarea rows={2} style={{ resize: "none", height: "6rem" }} id="description" className="form-control " />
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className='col-6'>
                        <label className="form-label" >Características</label>
                      </div>
                      <div className='col-6' style={{ textAlign: "end" }}>
                        <label className="form-label" ><a style={{ cursor: "pointer", fontWeight: "bold", color: "green" }} onClick={() => { document.getElementById("characteristic").value = JSON.stringify(sampleData, null, '\t') }}>Ver ejemplo</a></label>
                      </div>
                    </div>
                    <textarea rows={4} style={{ resize: "none", height: "6rem", width: "100%" }} id="characteristic" className="form-control textareaChar" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="caracteristicas" className="form-label" >Categoría</label>
                    <select id='categorySelect' className="form-select" >
                      <option selected>Selecciona la categoria</option>
                      <option value="1">Ropa</option>
                      <option value="2">Vasos / Termos / Tazas</option>
                      <option value="3">Llaveros</option>
                      <option value="4">Oficina</option>
                      <option value="5">Mochilas / Morrales / Loncheras</option>
                    </select>

                    <div className="col-12 form-check form-switch" style={{ margin: ".8rem 0rem" }}>
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" for="flexSwitchCheckDefault">Imagen personalizada</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="caracteristicas" className="form-label" >Imagen</label>
                    <input type="file" style={{ resize: "none" }} className="form-control " id='formFileSm' />
                  </div>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => { createProduct() }}>Agregar <FaFeatherAlt style={{ marginLeft: "5px" }} /></button>
                <button type="button" className="btn btn-secondary" onClick={() => { setModal(false) }} >Close</button>
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