import React, { useEffect, useContext, useState } from "react";
import NavBar from '../../components/NavBar/NavBar';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCreditCard,
  faShippingFast,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { createNotification } from '../../services/notifications';
import $ from 'jquery';
import swal from 'sweetalert';
import CartCard from "../../components/CartCard/CartCard";
import { deleteProductShoppingCart, deleteShoppingCart, getProductsShoppingCart } from "../../api/ShoppingCart";
import { getCard, getCardById } from '../../api/CardAPI';
import { getAddress, getAddresses } from '../../api/AddressAPI';
import PaymentMethodCard from "../../components/PaymentMethodCard/PaymentMethodCard";
import AddressPCard from "../../components/AddressPCard/AddressPCard";
import { addPurchase, addPurchaseItems } from "../../api/PurchaseAPI";

var cardSelected = null;
var cardSelectedInfo = null;
var addressSelected = null;
var addressSelectedInfo = null;
var disabledBtnCheckOut = true;

var token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");
var shoppingCartId = localStorage.getItem("shoppingCartId");

var totalPriceShoppingCart = 0;
const ShoppingCart = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [products, setProducts] = useState([]);
  const [cards, setCards] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [pps, setp] = useState();

  useEffect(() => {

    getProductsShoppingCart({ userId: userId }, token).then(res => {
      var products = [];
      if (res) {
        products = res.data.cartItemList;
      }
      setProducts(products);
      products.forEach(element => {
        totalPriceShoppingCart = totalPriceShoppingCart + element.byQuantity;
      });
      setp(totalPriceShoppingCart);
    }).catch(err => {
      console.log(err);
    });

  }, [])

  useEffect(() => {

    getCard({ userId: userId }, token).then(res => {
      var cards = [];
      if (res) {
        cards = res.data.paymentMethodList;
      }
      setCards(cards);
      console.log(cards);
    }).catch(err => {
      console.log(err);
    });

  }, [])

  useEffect(() => {

    getAddresses({ userId: userId }, token).then(res => {
      var addresses = [];
      if (res) {
        addresses = res.data.addressList;
      }
      setAddresses(addresses);
      console.log(addresses);
    }).catch(err => {
      console.log(err);
    });

  }, [])

  const initCheckOut = async () => {
    setModal(true);
  };

  const deleteProdcut = (e) => {
    var shoppingCartItemId = e.target.getAttribute("data-shoppingcartitemid");
    if (shoppingCartItemId != null) {
      const data = {
        shoppingCartItemId: shoppingCartItemId
      };
      deleteProductShoppingCart(data, token).then((response) => {
        if (response.status === 200) {
          createNotification(200, "Producto eliminado correctamente.", true, "/cart");
        }
      })
    }
  }

  const dropShoppingCart = async () => {
    await deleteShoppingCart({ shoppingCartId: shoppingCartId }, token).then((response) => {
      if (response.status === 200) {
        createNotification(200, "Carrito borrado correctamente.", true, "/cart");
      }
    });
  }

  const getCardId = (e) => {
    cardSelected = e.target.getAttribute("data-cardid");
    if (cardSelected != null) {
      getCardById({ paymentMethodsId: cardSelected }, token).then((response) => {
        if (response.status === 200) {
          cardSelectedInfo = {
            cardNumberPublic: response.data.cardNumber,
            method: response.data.method
          };
          document.getElementById("sigPM").disabled = false;
        }
      })
    }
  }

  $(document).on('click', '#sigPM', function () {
    setModal(false);
    setModal3(false);
    setModal2(true);
  });

  const getAddressId = (e) => {
    addressSelected = e.target.getAttribute("data-addressid");
    if (addressSelected != null) {
      getAddress({ addressId: addressSelected }, token).then((response) => {
        if (response.status === 200) {
          addressSelectedInfo = {
            name: response.data.name,
            streetNumber: response.data.streetNumber,
            suburb: response.data.suburb,
            city: response.data.city,
            state: response.data.state,
            postalCode: response.data.postalCode,
            country: response.data.country,
            phone: response.data.phone,
          };
          document.getElementById("sigAddress").disabled = false;
        }
      })
    }
  }

  $(document).on('click', '#sigAddress', function () {
    setModal(false);
    setModal2(false);
    setModal3(true);
  });

  const checkOut = () => {
    const purchaseData = {
      userId: userId,
      addressId: addressSelected,
      paymentMethodId: cardSelected,
      totalAmount:pps.toFixed(2)
    };

    addPurchase(purchaseData,token).then((response) => {
      if (response.status === 201) {
        var items = [];
        products.forEach((element) => {
          const data = {
            purchaseId: response.data,
            productId: element.productId,
            quantity: element.quantity,
            comment: element.comment
          };
          items.push(data);
        });
        addPurchaseItems({items:items},token).then((response) => {
          if(response.status === 201) {
            deleteShoppingCart({ shoppingCartId: shoppingCartId }, token).then((response) => {
              if (response.status === 200) {
                createNotification(200,"Compra realizada correctamente.",true,"/orders-history");
              }
            });
          }
        })
      }
    })

  };

  return (
    <>
      <div class="loader loader-default is-active d-none" id="loader" data-text="Procesando su compra..."></div>

      <div className="full-contailer d-flex flex-column">
        <div>
          <NavBar />

        </div>
        <div className='text-center texttypeBebas'>
          <h1>Carrito</h1>
        </div>
        <div className="d-flex row">

          <div class="card col-lg-8 mx-auto   mt-2 texttypeBebas scrol shadow" id="caja" style={{ height: "512px" }}>
            <div className="row ">
              {products ? products.map((item) => (
                < CartCard data={item} onClickDropFunction={deleteProdcut} />
              )) : console.log(products)}
            </div>
          </div>
          <div class="card col-lg-3 mx-auto mt-2 texttypeBebas shadow backcolorprice" id="caja" style={{ height: "230px" }}>
            <div className="row ">
              <div class=" row col-lg-12 mt-0  ">
                <div className="first m-3  d-flex  flex-row  col-lg-12">
                  <span className='col-lg-7'>Precio total del carrito:</span>
                  <span className='col-lg-5 text-end'>${pps.toFixed(2)}</span>

                </div>
                <div className="second m-3   d-flex  flex-row  col-lg-12">

                  <span className='col-lg-12 text-center'>
                    Envios solamente en la republica mexicana
                    <div className='pl-3'>
                      <FA icon={faShippingFast} />
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className=" botones  text-center mt-3">
              <a class="mx-auto col-lg-7 text-center colorWhite btn-warning  zoom  btn-sm btn shadow-none m-1 d-flex" type="button" onClick={initCheckOut}>
                <span className='col-lg-9 texttypeLight300'>
                  Pagar
                </span>
                <span className=''>
                  <FA icon={faCartShopping} />
                </span>
              </a>
            </div>
            <a class="mx-auto col-lg-7 text-center btn-warning btn-sm btn d-flex" style={{ marginBottom: "100px" }} type="button" onClick={dropShoppingCart}>
              <span className='col-lg-9 texttypeLight300'>
                Limpiar Carrito
              </span>
              <span className=''>
                <FA icon={faCartShopping} />
              </span>
            </a>
          </div>
        </div >
        <div>
        </div>
      </div >

      {modal && (
        <div className="modal texttypeBebas " style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content conmodal">
              <div className="m-3">
                <div className="row">
                  <div className="col-6" style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "1.5rem" }}>Metodo de pago</p>
                  </div>
                  <div className="col-6 text-end">
                    <a className="text-end" type="button" onClick={() => { setModal(false); }} style={{ color: "black" }} aria-label="Close" >
                      <FA icon={faClose}></FA>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-lg-12">
                <div
                  className="modal-body"
                  style={{ overflowY: "scroll", minHeight: "27.5rem", maxHeight: "27.5rem", backgroundColor: "whitesmoke" }}
                >
                  {cards ? cards.map((item) => (
                    <PaymentMethodCard key={item.paymentMethodsId} data={item} onChangeFunction={getCardId} />
                  )) : console.log(cards)}
                </div>
                <div style={{ padding: ".6rem", textAlign: "right" }}>
                  <button disabled id="sigPM" type="submit" className="zoom btn btn-warning" >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }

      {
        modal2 && (
          <div className="modal texttypeBebas " style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content conmodal">
                <div className="m-3">
                  <div className="row">
                    <div className="col-6" style={{ textAlign: "left" }}>
                      <p style={{ fontSize: "1.5rem" }}>Dirección de envío</p>
                    </div>
                    <div className="col-6 text-end">
                      <a
                        className="text-end"
                        type="button"
                        onClick={() => {
                          setModal2(false);
                        }}
                        style={{ color: "black" }}
                        aria-label="Close"
                      >
                        <FA icon={faClose}></FA>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-12">
                  <div className="modal-body" style={{ overflowY: "scroll", minHeight: "27.5rem", maxHeight: "27.5rem", backgroundColor: "whitesmoke", }} >
                    {addresses ? addresses.map((item) => (
                      <AddressPCard key={item.addressId} data={item} onChangeFunction={getAddressId} />
                    )) : console.log(addresses)}
                  </div>
                  <div style={{ padding: ".6rem" }}>
                    <div className="row">
                      <div className="col-6" style={{ textAlign: "left" }}>
                        <button onClick={() => { setModal2(false); }} type="submit" className="zoom btn btn-warning" >
                          Cancelar
                        </button>
                      </div>
                      <div className="col-6" style={{ textAlign: "right" }}>
                        <button disabled id="sigAddress" type="submit" className="zoom btn btn-warning" >
                          Siguiente
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        modal3 && (
          <div className="modal texttypeBebas " style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content conmodal">
                <div className="m-3">
                  <div className="row">
                    <div className="col-6" style={{ textAlign: "left" }}>
                      <p style={{ fontSize: "1.5rem" }}>Confirmación</p>
                    </div>
                    <div className="col-6 text-end">
                      <a
                        className="text-end"
                        type="button"
                        onClick={() => {
                          setModal3(false);
                        }}
                        style={{ color: "black" }}
                        aria-label="Close"
                      >
                        <FA icon={faClose}></FA>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-12">
                  <div
                    className="modal-body"
                    style={{ overflowY: "scroll", minHeight: "27.5rem", maxHeight: "27.5rem", backgroundColor: "whitesmoke", }}
                  >
                    <h4>Dirección de envío</h4>
                    <div class="col-lg-12">
                      <div class="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                        <div class="d-flex row">
                          <div class="col-lg-12 d-flex flex-row">
                            <div class="m-2 row">
                              <span><b>{addressSelectedInfo.name}</b></span>
                              <span>{addressSelectedInfo.streetNumber}</span>
                              <span>{addressSelectedInfo.suburb}</span>
                              <span>{addressSelectedInfo.city}, {addressSelectedInfo.state}</span>
                              <span>{addressSelectedInfo.postalCode}</span>
                              <span>{addressSelectedInfo.country}</span>
                              <span>T&eacute;lefono: {addressSelectedInfo.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4>Metodo de pago</h4>
                    <div class="col-lg-12">
                      <div class="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                        <div class="d-flex row">
                          <div class="col-lg-12 d-flex flex-row">
                            <div class="m-2 row">
                              <span>
                                {cardSelectedInfo.method == 'visa' ? (
                                  <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" className="visa" alt="" style={{ marginRight: "1rem", width: "4rem", height: "1.5rem" }} />
                                ) : (
                                  <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png" className="mastercard" alt="" style={{ marginRight: "1rem", width: "3.8rem", height: "2.8rem" }} />
                                )}
                                <span>**** **** **** {cardSelectedInfo.cardNumberPublic}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4>Resumen del pedido</h4>
                    <div class="col-lg-12">
                      <div class="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                        <div class="d-flex row">
                          <div class="col-lg-12 d-flex flex-row">
                            <div class="m-2 row">
                              <span>
                                Productos: <span>${pps.toFixed(2)}</span>
                              </span>
                              <span>
                                Emvio: <span>$0.00</span>
                              </span>
                              <span>
                                Subtotal: <span>${pps.toFixed(2)}</span>
                              </span>
                              <span>
                                Total (IVA incluido, en caso de ser aplicable): <span>${pps.toFixed(2)}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div style={{ padding: ".6rem" }}>
                    <div className="row">
                      <div className="col-6" style={{ textAlign: "left" }}>
                        <button onClick={() => { setModal3(false); }} type="submit" className="zoom btn btn-warning">
                          Cancelar
                        </button>
                      </div>
                      <div className="col-6" style={{ textAlign: "right" }}>
                        <button id='btnCheckOut' onClick={checkOut} className="zoom btn btn-warning" >
                          Pagar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ShoppingCart;