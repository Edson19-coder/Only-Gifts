import React, { useCallback, useState, useEffect } from 'react'
import { Carousel, Row, CardGroup, Col } from 'react-bootstrap';
import CardItem from '../../components/CardItem/CardItem';

import NavBar from "../../components/NavBar/NavBar";

import './Home.css';

import { getProducts } from '../../api/ProductAPI';

var token = localStorage.getItem("token");

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {

    getProducts(token).then(res => {
      var products = [];
      if (res) {
        products = res.data.productList;
      }
      setProduct(products);
      console.log(products);
    }).catch(err => {
      console.log(err);
    });

  }, [])

  return (
    <>

      <NavBar />

      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://dv.secoweb.mx/uploads/slideshow/71e137f753084c838e41579589501fa1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://dv.secoweb.mx/uploads/slideshow/7b8248faebe0623fc9cd5d98ce53c6f0.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dv.secoweb.mx/uploads/slideshow/03ba11128f886ae3ec8a94e1534606cd.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div id="productsContainer">
          <br />
          <h1>Productos más nuevos</h1>
          <hr />

          <Row id="products">
            <CardGroup>
              {products ? products.map((item) => (
                <CardItem data={item} />
              )) : console.log(products)}
            </CardGroup>
          </Row>

        </div>
      </div>

    </>
  )
}

export default Home;