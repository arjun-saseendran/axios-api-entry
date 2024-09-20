import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { Footer } from "../footer/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const { product_id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .then((response) => setProduct(response.data));
  }, []);

  return (
    <>
      <Header />
      <Row>
        <Card style={{ background: "#FFF8E8" }}>
          <Card.Img
            className="mx-auto w-25 p-5"
            variant="top"
            src={product.image}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="dark" style={{ background: "#603F26" }}>
              Buy now{" "}
            </Button>
          </Card.Body>
        </Card>
      </Row>
      <Footer />
    </>
  );
};

export default Product;
