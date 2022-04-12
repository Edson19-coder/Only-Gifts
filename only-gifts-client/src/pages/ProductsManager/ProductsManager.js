import React from "react";

import TableItemPM from '../../components/TableItemPM/TableItemPM';

import "./ProductsManager.css";

const ProductsManager = () => {
  return (
    <div id="productsManagerContainer">
      <h3>Productos</h3>
      <hr />
      <div class="table-responsive">
        <table class="table" style={{height: '10rem'}}>
          <thead>
            <tr>
              <th scope="col">SKU</th>
              <th scope="col" style={{width: '12rem'}}>Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            < TableItemPM />
            < TableItemPM />
            < TableItemPM />
            < TableItemPM />
            < TableItemPM />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManager;
