import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

import './CardItem.css';
import { GLOBAL } from "../../api/GlobalApi"; 

const CardItem = (props) => {
    let hrefLink = `/product/${props.data.productId}`;
  return (
    <Col xl={2} lg={4} md={6} sm={6} className="mb-3">
        <a href={hrefLink}>
            <Card className="mb-3 product" >
                <Card.Img variant="top" style={{objectFit: "contain", height: "280px"}} src={GLOBAL.url + "/get-image-product/" + props.data.productId + "/" + props.data.image}/>
                <Card.Body className="card-body">
                    <Row>
                        <Col xl={8} lg={9} md={12} sm={12}>
                            <span ><b>{props.data.name}</b></span>
                            <br/>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="productFooter">
                    <div className="row">
                        <Col lg={6}>
                            <span className="badge badge-primary">SKU: {props.data.productId}</span>
                        </Col>
                        <Col lg={6}>
                            <span className="price"><b>${props.data.price}</b></span>
                        </Col>
                    </div>
                </Card.Footer>
            </Card>
        </a>
    </Col>
  )
}

export default CardItem