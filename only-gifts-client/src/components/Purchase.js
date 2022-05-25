import React from 'react';
import { BiDetail } from "react-icons/bi";
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faInfoCircle,faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const Purchase = (props) => {
    return (
        <>
            <tr className="table-secondary">
                <th scope="row" > {props.data.purchaseId} </th>
                <td> {props.data.creationDate} </td>
                <td> ${props.data.totalAmount} </td>
                <select value={props.data.status} className="form-select" disabled>
                    <option value="P">Pendiente</option>
                    <option value="EC">En Camino</option>
                    <option value="E">Entregado</option>
                    <option value="C">Cancelado</option>
                </select>
                <td style={{ textAlign: "center" }}>
                    <button scope="row" data-purchaseid={props.data.purchaseId} onClick={props.GetPurchase} className="btn  btn-sm " style={{ marginRight: "3px" }} ><BiDetail /></button>
                    {props.data.status === 'P' ?
                        <button onClick={props.onClickCancel} data-purchaseid={props.data.purchaseId} scope="row" className="btn btn-sm " style={{ marginRight: "3px" }} ><FA title='Cancelar' style={{ marginLeft: "8px" }} icon={faCircleXmark} ></FA></button>
                    : ""}
                </td>
            </tr>
        </>
    )
}

export default Purchase;