import React from 'react';
import { FaBoxes } from "react-icons/fa";

const ProductPurchase = () => {
  return (
      <div>
          <div className="card">
              <div className="card-body row" data-bs-toggle="collapse" href="#collapse1" role="button">
                  <div className="col-6" style={{ textAlign: "start" }}>
                      <FaBoxes style={{ marginRight: "0.5rem" }} /> Nombre del producto
                  </div>
                  <div className='col-6' style={{ textAlign: "end" }}>
                      <span style={{ fontWeight: "bold", color: "green" }}>$369.00</span>
                  </div>
              </div>
          </div>
          <div className="collapse p-1" id="collapse1">
              <div className="card card-body">
                  <h6>Cantidad de articulos: 3</h6>
                  <h6>Observaciones:</h6>
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  <hr />
                  <button type="button" className="btn btn-success" >Descargar recursos</button>
              </div>
          </div>
      </div>
  )
}

export default ProductPurchase;