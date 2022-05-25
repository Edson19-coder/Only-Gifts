import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import ProductPurchase from '../../components/ProductPurchase/ProductPurchase';
import { getPurchaseDetail, getPurchasesUser, updatePurchase } from '../../api/PurchaseAPI';
import Purchase from '../../components/Purchase';
import swal from 'sweetalert';

var token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");

var purchaseSelected = null;
var purchaseSelectedInfo = null;
const History = () => {
    const [purchases, setPurchases] = useState([]);
    const [modal, setModal] = useState(false)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getPurchasesUser({ userId: userId }, token).then(result => {
            var purchases = [];
            if (result) {
                purchases = result.data.purchaseList;
            }
            setPurchases(purchases);
            console.log(result.data.purchaseList);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const getPurchaseId = (e) => {
        purchaseSelected = e.target.getAttribute("data-purchaseid");
        if (purchaseSelected != null) {
            getPurchaseDetail({ purchaseId: purchaseSelected }, token).then((response) => {
                if (response.status == 200) {
                    purchaseSelectedInfo = {
                        name: response.data.name,
                        streetNumber: response.data.streetNumber,
                        suburb: response.data.suburb,
                        city: response.data.city,
                        state: response.data.state,
                        postalCode: response.data.postalCode,
                        country: response.data.country,
                        phone: response.data.phone,
                        cardNumber: response.data.cardNumber,
                        method: response.data.method,
                        totalAmount: response.data.totalAmount
                    };
                    var p = [];
                    p = response.data.items;
                    setProducts(p);
                }
            }).finally(() => {
                setModal(true);
            });
        }
    }

    const cancelPurchase = (e) => {
        purchaseSelected = e.target.getAttribute("data-purchaseid");
        if (purchaseSelected != null) {

            swal({
                title: "¡Alerta!",
                text: "¿Estas seguro que quieres cancelar la compra?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((result) => {
                if (result) {
                    updatePurchase({ purchaseId: purchaseSelected, status: "C" }, token).then((response) => {
                        if (response.status === 200) {
                            window.location = '/orders-history';
                        }
                    });
                }
            })
        }
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-12 h2">
                        Mis pedidos
                    </div>

                </div>

                <div className="row mt-3 bg-white rounded-3 shadow p-4 ">
                    <div className="col-6 h4 mb-3"> Pedidos </div>

                    <div className="col-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Pedido N.º</th>
                                    <th scope="col">Fecha de pedido</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Estatus</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchases ? purchases.map((item) => (
                                    <Purchase key={item.purchaseId} data={item} GetPurchase={getPurchaseId} onClickCancel={cancelPurchase} />
                                )) : console.log(purchases)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {
                modal &&
                <div className="modal " style={{ display: "block", backgroundColor: "rgba(1,1,1,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Detalles de la compra</h5>
                                <button type="button" onClick={() => { setModal(false) }} className="btn-close" aria-label="Close">
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ overflowY: "scroll", minHeight: "27.5rem", maxHeight: "27.5rem", backgroundColor: "whitesmoke", }}>
                                <h4>Dirección de envío</h4>
                                <div className="col-lg-12">
                                    <div className="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                                        <div className="d-flex row">
                                            <div className="col-lg-12 d-flex flex-row">
                                                <div className="m-2 row">
                                                    <span><b>{purchaseSelectedInfo.name}</b></span>
                                                    <span>{purchaseSelectedInfo.streetNumber}</span>
                                                    <span>{purchaseSelectedInfo.suburb}</span>
                                                    <span>{purchaseSelectedInfo.city}, {purchaseSelectedInfo.state}</span>
                                                    <span>{purchaseSelectedInfo.postalCode}</span>
                                                    <span>{purchaseSelectedInfo.country}</span>
                                                    <span>T&eacute;lefono: {purchaseSelectedInfo.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4>Metodo de pago</h4>
                                <div className="col-lg-12">
                                    <div className="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                                        <div className="d-flex row">
                                            <div className="col-lg-12 d-flex flex-row">
                                                <div className="m-2 row">
                                                    <span>
                                                        {purchaseSelectedInfo.method == 'visa' ? (
                                                            <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" className="visa" alt="" style={{ marginRight: "1rem", width: "4rem", height: "1.5rem" }} />
                                                        ) : (
                                                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png" className="mastercard" alt="" style={{ marginRight: "1rem", width: "3.8rem", height: "2.8rem" }} />
                                                        )}
                                                        <span>**** **** **** {purchaseSelectedInfo.cardNumber}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4>Productos</h4>
                                <div className="col-lg-12">
                                    {products ? products.map((item) => (
                                        <ProductPurchase data={item} />
                                    )) : console.log(products)}
                                </div>
                                <h4>Resumen del pedido</h4>
                                <div className="col-lg-12">
                                    <div className="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                                        <div className="d-flex row">
                                            <div className="col-lg-12 d-flex flex-row">
                                                <div className="m-2 row">
                                                    <span>
                                                        <b>Productos:</b> <span>${purchaseSelectedInfo.totalAmount}</span>
                                                    </span>
                                                    <span>
                                                        <b>Emvio:</b> <span>$0.00</span>
                                                    </span>
                                                    <span>
                                                        <b>Subtotal:</b> <span>${purchaseSelectedInfo.totalAmount}</span>
                                                    </span>
                                                    <span>
                                                        <b>Total (IVA incluido, en caso de ser aplicable):</b> <span>${purchaseSelectedInfo.totalAmount}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => { setModal(false) }} >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default History;