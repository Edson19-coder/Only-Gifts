import React from "react";

const AddressCard = (props) => {
  return (
    <div className="col-lg-4 card" style={{ width: "fit-content", maxWidth: "24rem", boxShadow:"0px 0px 4px 0px #00000072"}}>
      <div className="card m-1 mb-2 p-1 backcolorcart border border-white">
        <div className="d-flex row">
          <div className="col-lg-12">
            <div className="m-2 row">
              <span><b>Edson Lugo</b></span>
              <span>Los Naranjos #111</span>
              <span>RESIDENCIAL ESCOBEDO</span>
              <span>CIUDAD GENERAL ESCOBEDO, NUEVO LEON</span>
              <span>66057</span>
              <span>México</span>
              <span>T&eacute;lefono: 8128949908</span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="m-2 row d-flex mx-auto">
              <div className="col-lg-5 d-flex  botones  text-center ">
                <a className="colorWhite btn-outline-primary zoom  btn-sm btn shadow-none m-1" type="button" onClick={() => { props.modal(true) }}>
                  <span className="m-1">Editar</span>
                </a>
                <a className="colorWhite btn-outline-danger zoom btn-sm btn shadow-none m-1 " type="button" >
                  <span className="m-1">Eliminar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
