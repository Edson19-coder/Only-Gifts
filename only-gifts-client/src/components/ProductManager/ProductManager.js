import React from 'react';
import { FaFeatherAlt, FaCircle } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { VscVmActive,VscVmOutline } from "react-icons/vsc";

const ProductManager = (props) => {
    if (props.data.status === 'A') {
        return (
            <>
                <tr className="table-secondary">
                    <th scope="row"> <FaCircle className="text-success" /> Activo</th>
                    <td> {props.data.name} </td>
                    <td> ${props.data.price} </td>
                    <td> {props.data.category} </td>
                    <td>
                        <button className="btn  btn-sm " style={{ marginRight: "3px" }} data-productId={props.data.productId} ><AiFillEdit /></button>
                        <button className="btn btn-sm " data-productId={props.data.productId} data-status={props.data.status} onClick={props.onClickChangeStatus} ><VscVmOutline /></button>
                        <button className="btn btn-sm " data-productId={props.data.productId} onClick={props.onClickDrop} ><AiFillDelete /></button>
                    </td>
                </tr>
            </>
        )
    } else {
        return (
            <tr className="table-secondary">
                <th scope="row"> <FaCircle className="text-danger" /> Desactivado</th>
                <td> {props.data.name} </td>
                <td> ${props.data.price} </td>
                <td> {props.data.category} </td>
                <td>
                    <button className="btn  btn-sm " style={{ marginRight: "3px" }} data-productId={props.data.productId} ><AiFillEdit /></button>
                    <button className="btn btn-sm " data-productId={props.data.productId} onClick={props.onClickChangeStatus} ><VscVmActive /></button>
                    <button className="btn btn-sm " data-productId={props.data.productId} onClick={props.onClickDrop} ><AiFillDelete /></button>
                </td>
            </tr>
        )
    }
}

export default ProductManager;