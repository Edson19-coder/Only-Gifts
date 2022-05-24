import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Button, Card, Carousel, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { createNotification } from '../../services/notifications';

import NavBar from "../../components/NavBar/NavBar";

import './ProductItem.css';
import { GLOBAL } from "../../api/GlobalApi";
import { getProduct } from '../../api/ProductAPI';
import { addProductShoppingCart } from '../../api/ShoppingCart';

var token = localStorage.getItem("token");
var shoppingCartId = localStorage.getItem("shoppingCartId");

const ProductItem = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [carac, setCarac] = useState([]);

  useEffect(() => {
    getProduct({ productId: productId }, token).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setProduct(response.data);
        var characteristic = JSON.parse(response.data.characteristic);
        var arr = [];
        for (const prop in characteristic) {
          arr.push({ prop: `${prop}: ${characteristic[prop]}` })
        }
        setCarac(arr);
        console.log(carac);
      } else {
        window.location = "/";
      }
    });
  }, [])

  const addProductCart = () => {
    var productData = {
      shoppingCartId:parseInt(shoppingCartId),
      productId:parseInt(productId),
      quantity:parseInt(document.getElementById("amountProduct").value),
      comment:document.getElementById("floatingTextarea").value
    }
    addProductShoppingCart(productData,token).then((response) => {
      if(response.status === 201) {
        createNotification(200,"Producto agregado correctamente",true,"/cart")
      }
    })
  }

  return (
    <>

      <NavBar />

      <Row xs={1} id="prd-container">
        <Col xl={6} lg={5} md={12}>
          <Card>
            <Card.Body>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={GLOBAL.url + "/get-image-product/" + productId + "/" + product.image}
                    style={{objectFit: "contain", height: "680px"}}
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={7} md={12}>
          <Card id="productInfo">
            <h3>{product.name}</h3>
            <p style={{ color: "grey" }}>SKU: {productId}</p>
            <div>
              <p id="productPrice">$ {product.price}</p>
              <input className="form-control" step="1" min="1" type="number" id="amountProduct" name="precio" defaultValue="1" placeholder="Cantidad de productos" style={{width:"200px"}}></input>
            </div>
            <div>
              <h5>Descripción</h5>
              <p>{product.description}</p>
            </div>
            <div id="productCharacteristics">
              <h5>Características</h5>
              <div style={{ height: "160px", overflowY: "scroll" }}>
                <table className="table" style={{ backgroundColor: "white" }}>
                  <div className='row' >
                    {carac.map((item) => (
                      <span>{item.prop}</span>
                    ))}
                  </div>
                </table>
              </div>
            </div>
            {product.description ? (
              <div>
                <h5>Personalizacion:</h5>
                <Table striped bordered hover responsive="xl">
                  <tbody>
                    <tr>
                      <td>Observaciones</td>
                      <td>Imagen</td>
                    </tr>
                    <td>
                      <FloatingLabel controlId="floatingTextarea" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                      </FloatingLabel>
                    </td>
                    <td style={{textAlign:"center"}}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png" style={{objectFit: "contain", height: "50px"}} />
                      <p>Agregue el link de la imagen en las obeservaciones.</p>
                    </td>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div>
                <h5>Personalizacion:</h5>
                <Table striped bordered hover responsive="xl">
                  <tbody>
                    <tr>
                      <td>Observaciones</td>
                    </tr>
                    <td>
                      <FloatingLabel controlId="floatingTextarea" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                      </FloatingLabel>
                    </td>
                  </tbody>
                </Table>
              </div>
            )}
            <Button id="ButtonAddCar" onClick={() => {addProductCart()}} >Añadir al carrito</Button>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductItem;