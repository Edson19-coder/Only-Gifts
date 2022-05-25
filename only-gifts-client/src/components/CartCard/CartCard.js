import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faSearch, faScrewdriverWrench, faCartShopping, faCheck, faCreditCard, faTrash, faTrashCan, faSquareArrowUpRight, faLessThan } from "@fortawesome/free-solid-svg-icons"
import { GLOBAL } from "../../api/GlobalApi";

function CartCard(props) {

  return (
    <div class=" row col-lg-12 mt-0 backcolorcart border border-white mx-auto ">
      <div className=" col-lg-5 d-flex">
        <img className="my-auto align-items-start" src={props.data.imageUrl} style={{ objectFit: "initial", height: "90px", width: "90px" }} />

        <div className="m-2 " style={{ paddingLeft: "10px" }}>
          <div className="row">
            <label className='m-0'>Nombre del producto: <label className='texttypeLight300 ' style={{ paddingLeft: "5px" }}>{props.data.name}</label></label>
            <label className='m-0'>Categoria: <label className='texttypeLight300' style={{ paddingLeft: "5px" }} >{props.data.category}</label></label>
            <label className='m-0'>Precio: <label className='texttypeLight300' style={{ paddingLeft: "5px" }}>${props.data.unitary}</label></label>
          </div>
        </div>

      </div>
      <div className="col-lg-7 d-flex flex-row  mx-auto">

        <div className=" botones mt-3">
          <span className='mx-auto'>Cantidad</span>
          <input readOnly class="form-control mt-1 m-auto" style={{ width: "100px" }} step="1" min="1" type="number" id="cantidad"
            name="precio" placeholder="Cantidad" defaultValue={props.data.quantity} />
        </div>
        <div className=" botones mt-3" style={{ marginLeft: "15px" }}>
          <label for="floatingTextarea">Observaciones</label>
          <textarea readOnly class="form-control" defaultValue={props.data.comment} id="floatingTextarea"></textarea>
        </div>
        <div className=" botones col-lg-2 m-4 d-flex mx-auto">
          <a class=" colorWhite btn-warning zoom btn btn-sm shadow-none m-1 d-flex" type="button" data-shoppingcartitemid={props.data.shoppingCartItemId} onClick={props.onClickDropFunction}>
            <span className='m-2'>
              <FA icon={faTrashCan} />
            </span>
          </a>
        </div>


      </div>
    </div>
  )
}

export default CartCard;


