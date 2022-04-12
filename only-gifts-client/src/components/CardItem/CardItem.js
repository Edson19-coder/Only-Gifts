import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

import './CardItem.css';

const CardItem = () => {
  return (
    <Col xl={2} lg={4} md={6} sm={6} className="mb-3">
        <a href="#">
            <Card className="mb-3 product" >
                <Card.Img variant="top" src="https://doblevela.com/images/large/A2770_lrg.jpg"/>
                <Card.Body className="card-body">
                    <Row>
                        <Col xl={8} lg={9} md={12} sm={12}>
                            <span ><b>Producto generico</b></span>
                            <br/>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="productFooter">
                    <div className="row">
                        <Col lg={6}>
                            <span className="badge badge-primary">SKU: 123</span>
                        </Col>
                        <Col lg={6}>
                            <span className="price"><b>$100</b></span>
                        </Col>
                    </div>
                </Card.Footer>
            </Card>
        </a>
    </Col>
  )
}

export default CardItem