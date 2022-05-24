import React from 'react';
import { FaBoxes } from "react-icons/fa";

const ProductPurchase = (props) => {
  return (
      <div>
          <div className="card">
              <div className="card-body row" data-bs-toggle="collapse" href="#collapse1" role="button">
                  <div className="col-6" style={{ textAlign: "start" }}>
                      <FaBoxes style={{ marginRight: "0.5rem" }} /> {props.data.name}
                  </div>
                  <div className='col-6' style={{ textAlign: "end" }}>
                      <span style={{ fontWeight: "bold", color: "green" }}>${props.data.price}</span>
                  </div>
              </div>
          </div>
          <div className="collapse p-1" id="collapse1">
              <div className="card card-body">
                  <h6>Cantidad de articulos: {props.data.quantity}</h6>
                  <h6>Observaciones:</h6>
                  {props.data.commnet}
              </div>
          </div>
      </div>
  )
}

export default ProductPurchase;