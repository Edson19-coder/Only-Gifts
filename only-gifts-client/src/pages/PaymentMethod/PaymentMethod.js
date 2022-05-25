import React, { useCallback, useState, useEffect } from 'react'
import 'react-credit-cards/es/styles-compiled.css';
import PaymentMethodCard from '../../components/PaymentMethodCard/PaymentMethodCard';
import NavBar from "../../components/NavBar/NavBar";
import $ from 'jquery';
import { createNotification } from '../../services/notifications';
import swal from 'sweetalert';

import { dropCard, getCard } from '../../api/CardAPI';
import PaymentForm from '../../components/PaymentForm/PaymentForm';

var cardIdSelected = null;
var token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");

const PaymentMethod = () => {
    const [cards, setCard] = useState([]);

    useEffect(() => {

        getCard({ userId: userId }, token).then(res => {
            var cards = [];
            if (res) {
                cards = res.data.paymentMethodList;
            }
            setCard(cards);
            console.log(cards);
        }).catch(err => {
            console.log(err);
        });

    }, [])

    const getCardId = (e) => {
        cardIdSelected = e.target.getAttribute("data-cardid");
        if (cardIdSelected != null) {
            document.getElementById("btnEditPaymentMethod").disabled = false;
            document.getElementById("btnRemovePaymentMethod").disabled = false;
            document.getElementById("btnAddPaymentMethod").disabled = true;
        }
    }

    $(document).on('click', '#btnRemovePaymentMethod', function () {
        if (cardIdSelected != null) {
            swal({
                title: "¡Alerta!",
                text: "¿Estas seguro que quieres eliminar la tarjeta?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((result) => {
                if (result) {
                    dropCard({paymentMethodsId:cardIdSelected},token).then((response) => {
                        if(response.status === 200) {
                            createNotification(200, "Tarjeta eliminada correctamente.", true, "/payment-method");
                        }
                    })
                    console.log(cardIdSelected);
                }
            })
        }
    });


    return (
        <>
            <NavBar />
            <div className="container col-12 my-learning" style={{ padding: "20px" }}>
                <div className="col-12" style={{ backgroundColor: "white", padding: "20px" }}>

                    <div className="row">

                        <div className="col-12 title text-center">
                            <h3>Metodos de pago</h3>
                            <hr />
                        </div>

                        <div className="col-7 card" style={{ overflowY: "scroll", height: "30rem", padding: "1rem" }}>
                            <div className="px-4" id="payment-method-cards">
                                {cards ? cards.map((item) => (
                                    <PaymentMethodCard key={item.paymentMethodsId} data={item} onChangeFunction={getCardId} />
                                )) : console.log(cards)}
                            </div>
                        </div>

                        <div className="col-5" id="payment-method-orgin">

                            <PaymentForm />

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PaymentMethod;
