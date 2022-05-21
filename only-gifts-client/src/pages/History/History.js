import React, { useCallback, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import { BiDetail } from "react-icons/bi";
import ProductPurchase from '../../components/ProductPurchase/ProductPurchase';


const History = () => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 h2">
                        Mis pedidos
                    </div>

                </div>

                <div className="row mt-3 bg-white rounded-3 shadow p-4 ">
                    <div className="col-6 h4 mb-3"> Pedidos </div>
                    <div className="col-6 h4 mb-3 d-flex flex-row-reverse ">
                        <select name="" id="" className="form-select  "  >
                            <option className='' >   Pendientes </option>
                            <option> En Camino </option>
                            <option> Entregado </option>
                        </select>
                    </div>

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
                                <tr className="table-secondary">
                                    <th scope="row" > 123 </th>
                                    <td> 14 de mayo de 2022 </td>
                                    <td> $250.0 </td>
                                    <td> En camino </td>
                                    <td style={{ textAlign: "center" }}>
                                        <button scope="row" onClick={() => { setModal(true) }} className="btn  btn-sm " style={{ marginRight: "3px" }} ><BiDetail /></button>
                                    </td>
                                </tr>
                                <tr className="table-secondary">
                                    <th scope="row" > 123 </th>
                                    <td> 14 de mayo de 2022 </td>
                                    <td> $250.0 </td>
                                    <td> Pendiente </td>
                                    <td style={{ textAlign: "center" }}>
                                        <button scope="row" onClick={() => { setModal(true) }} className="btn  btn-sm " style={{ marginRight: "3px" }} ><BiDetail /></button>
                                    </td>
                                </tr>
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
                                                    <span>
                                                        Destinatario:{" "}
                                                        <span>Pedro Angel Ramirez Villarreal</span>
                                                    </span>
                                                    <span>
                                                        Colonia: <span>Galin</span>
                                                    </span>
                                                    <span>
                                                        Estado: <span>Nuevo Leon</span>
                                                    </span>
                                                    <span>
                                                        Pais: <span>Mexico</span>
                                                    </span>
                                                    <span>
                                                        Ciudad: <span>Apodaca</span>
                                                    </span>
                                                    <span>
                                                        Direccion: <span>Cuarta</span>
                                                        <span>#817</span>
                                                    </span>
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
                                                        <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" className="visa" alt="" style={{ marginRight: "1rem", width: "4rem", height: "1.5rem" }} />
                                                        <span>**** **** **** 1234</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4>Productos</h4>
                                <div className="col-lg-12">
                                    <ProductPurchase />
                                </div>
                                <h4>Resumen del pedido</h4>
                                <div className="col-lg-12">
                                    <div className="card m-1 mb-2 p-1 border border-white" style={{ color: "black" }}>
                                        <div className="d-flex row">
                                            <div className="col-lg-12 d-flex flex-row">
                                                <div className="m-2 row">
                                                    <span>
                                                        <b>Productos:</b> <span>$369.00</span>
                                                    </span>
                                                    <span>
                                                        <b>Emvio:</b> <span>$0.00</span>
                                                    </span>
                                                    <span>
                                                        <b>Subtotal:</b> <span>$369.00</span>
                                                    </span>
                                                    <span>
                                                        <b>Total (IVA incluido, en caso de ser aplicable):</b> <span>$369.00</span>
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