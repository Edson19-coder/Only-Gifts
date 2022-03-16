import React from 'react';

import { Card, Row } from 'react-bootstrap';

import './CardItem.css';

const CardItem = () => {
  return (
    <a href="#">
        <Card className="mb-3 product" >
            <Card.Img variant="top" src="https://doblevela.com/images/large/A2770_lrg.jpg"/>
            <Card.Body className="card-body">
                <Row>
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                        <span ><b>Producto generico</b></span>
                        <br/>
                    </div>
                </Row>
            </Card.Body>
            <Card.Footer className="productFooter">
                <div className="row">
                    <div className="col-lg-6">
                        <span className="badge badge-primary">SKU: 123</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="price"><b>$100</b></span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    </a>
  )
}

export default CardItem