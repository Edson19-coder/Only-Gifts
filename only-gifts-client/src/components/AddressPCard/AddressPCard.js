import React from "react";

const AddressPCard = (props) => {
  return (
    <div className="col-lg-12">
      <div className="card m-1 mb-2 p-1 backcolorcart border border-white">
        <div className="d-flex row">
          <div className="col-lg-12 d-flex flex-row">
            <div className="m-2 row">
              <div className="d-flex position-relative">
                <div className="input">
                  <input
                    type="radio"
                    name="card"
                    className="addressSelected"
                    data-addressid={props.id}
                    data-cardnumber="1234"
                    data-cardtype="visa"
                  />
                </div>
              </div>
              <span>
                Destinatario: <span>Pedro Angel Ramirez Villarreal</span>
              </span>
              <span>
                Colonia:<span>Galin</span>
              </span>
              <span>
                Estado:<span>Nuevo Leon</span>
              </span>
              <span>
                Pais:<span>Mexico</span>
              </span>
              <span>
                Ciudad:<span>Apodaca</span>
              </span>
              <span>
                Direccion:<span>Cuarta</span>
                <span>#817</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPCard;
