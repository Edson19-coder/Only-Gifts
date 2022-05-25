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
                    data-addressid={props.data.addressId}
                    onChange={props.onChangeFunction}
                  />
                </div>
              </div>
              <span><b>{props.data.name}</b></span>
              <span>{props.data.streetNumber}</span>
              <span>{props.data.suburb}</span>
              <span>{props.data.city}, {props.data.state}</span>
              <span>{props.data.postalCode}</span>
              <span>{props.data.country}</span>
              <span>T&eacute;lefono: {props.data.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPCard;
