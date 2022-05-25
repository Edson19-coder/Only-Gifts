import React, { useCallback, useState, useEffect } from 'react'
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';

import { createNotification } from '../../services/notifications';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData,
    getIssuer
} from "../../utils/utils";

import { addCard } from '../../api/CardAPI';

var token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter((d) => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        if (getIssuer(this.state.number) != null) {
            var exp = this.state.expiry.split("/");
            const card = {
                userId: userId,
                method: getIssuer(this.state.number),
                cardHolder: this.state.name,
                cardNumber: this.state.number,
                expirationMonth: exp[0],
                expirationYear: exp[1],
                securityNumber: this.state.cvc
            };
            addCard(card, token).then((response) => {
                if (response.status === 201) {
                    createNotification(200, "Tarjeta agregada correctamente.", true, "/payment-method");
                }
            });
        } else {
            console.log("Tarjeta no permitida");
        }
        this.form.reset();
    };

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    acceptedCards={['visa', 'mastercard']}
                />
                <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="number"
                            className="form-control mb-3 mt-3"
                            placeholder="Card Number"
                            pattern="[\d| ]{16,22}"
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-3"
                            placeholder="Name"
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="tel"
                                name="expiry"
                                className="form-control mb-3"
                                placeholder="Valid Thru"
                                pattern="\d\d/\d\d"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="tel"
                                name="cvc"
                                className="form-control mb-3"
                                placeholder="CVC"
                                pattern="\d{3,4}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                    </div>
                    <div className="col-12" style={{ paddingTop: "10px" }}>
                        <div className="row">
                            <div className="col-4">
                                <input type="button" className="form-control btn btn-primary" value="Editar" id="btnEditPaymentMethod" disabled />
                            </div>
                            <div className="col-4">
                                <input type="button" className="form-control btn btn-danger" value="Borrar" id="btnRemovePaymentMethod" disabled />
                            </div>
                            <div className="col-4 form-actions">
                                <button className="form-control btn btn-success" value="Add" id="btnAddPaymentMethod" >Añadir</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12" style={{ paddingTop: "10px" }}>
                        <input type="button" className="form-control btn btn-secondary" value="Limpiar" id="btnClear" onClick={() => window.location.href = window.location.href} />
                    </div>
                </form>
            </div>
        );
    }
}