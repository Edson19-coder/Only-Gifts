import React from 'react';
import { Button, Card, Carousel, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';

import './ProductItem.css';

const productItem = () => {
  return (
    <Row xs={1} id="prd-container">
      <Col xl={6} lg={5} md={12}>
        <Card>
          <Card.Body>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://doblevela.com/images/large/SEG4308_lrg.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://doblevela.com/images/large/SEG4308_lrg.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://doblevela.com/images/large/SEG4308_lrg.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} lg={7} md={12}>
        <Card id="productInfo">
          <h3>Nombre de producto</h3>
          <p style={{color: "grey"}}>SKU: 123</p>
          <div>
            <p id="productPrice">$ 98.95</p>
            <label>Cantidad:</label>
            <input id="amountProduct" type="number" min={1} defaultValue={1}/>
          </div>
          <div>
            <h5>Descripción</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis consequat venenatis, neque ex egestas ligula, at scelerisque eros turpis eu felis. Nullam vitae fermentum nunc.</p>
          </div>
          <div id="productCharacteristics">
            <h5>Características</h5>
            <Table striped bordered hover responsive="xl">
              <tbody>
                <tr>
                  <td>Material</td>
                  <td>Plastico</td>
                </tr>
                <tr>
                  <td>Medidas</td>
                  <td>2.3 x 1.2 x 7.9 cm</td>
                </tr>
                <tr>
                  <td>Peso</td>
                  <td>200g</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <h5>Personalizacion:</h5>
              <Table striped bordered hover responsive="xl">
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>Tamaño</td>
                  </tr>
                  <td>
                    <Form.Select>
                    <option>Color</option>
                    <option value="1">Negro</option>
                    <option value="2">Blanco</option>
                    <option value="3">Rojo</option>
                  </Form.Select>
                  </td>
                  <td>
                    <Form.Select>
                    <option>Tamaño</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    </Form.Select>
                  </td>
                </tbody>
              </Table>
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
                  <td>
                    <Form.Group controlId="formFile">
                      <Form.Control type="file" />
                    </Form.Group>
                  </td>
                </tbody>
              </Table>
          </div>
          <Button id="ButtonAddCar">Añadir al carrito</Button>
        </Card>
      </Col>
    </Row>
  )
}

export default productItem;