import React from "react";

import "./PaymentMethodCard.css";

const PaymentMethodCard = (props) => {
  var card = null;
  if (props.type == "visa") {
    card = (
      <div className="debit-card mb-3 mt-3">
        <div className="d-flex flex-column h-100">
          {" "}
          <label className="d-block">
            <div className="d-flex position-relative">
              <div>
                <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" className="visa" style={{ width: "3.125rem", height: "3.125" }} alt="" />
                <p className="mt-2 mb-4 text-white fw-bold">Edson Lugo</p>
              </div>
              <div className="input">
                <input type="radio" name="card" className="cardSelectedPM" data-cardid={props.id} data-cardnumber="1234" data-cardtype="visa" onChange={props.onChangeFunction} />
              </div>
            </div>
          </label>
          <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
            <p>**** **** **** 1234</p>
            <p>12/2025</p>
          </div>
        </div>
      </div>
    );
  } else if (props.type == "mastercard") {
    card = (
      <div className="debit-card card-mastercard mb-3 mt-3">
        <div className="d-flex flex-column h-100">
          {" "}
          <label className="d-block">
            <div className="d-flex position-relative">
              <div>
                {" "}
                <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png" alt="master" className="master" style={{ width: "3.125rem", height: "3.125rem" }} />
                <p className="text-white fw-bold">Edson Lugo</p>
              </div>
              <div className="input">
                <input type="radio" name="card" className="cardSelectedPM" data-cardid={props.id} data-cardnumber="1234" data-cardtype="master" onChange={props.onChangeFunction}/>
              </div>
            </div>
          </label>
          <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
            <p>**** **** **** 1234</p>
            <p>12/2025</p>
          </div>
        </div>
      </div>
    );
  }
  return card;
};

export default PaymentMethodCard;
