import React from 'react';
import { Container, Carousel, Row, CardGroup } from 'react-bootstrap';
import CardItem from '../../components/CardItem/CardItem';

import './Home.css';

const Home = () => {
  return (
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
    
      <Container id="productsContainer">
        <br/>
        <h1>Productos más nuevos</h1>
        <hr/>

        <Row id="products">
        <CardGroup>
          {Array.from({ length: 6 }).map((_, idx) => (
              <CardItem></CardItem>
          ))}
        </CardGroup>
        </Row>

      </Container>
    </div>
  )
}

export default Home;