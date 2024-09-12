import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards({ product }) {
  return (
    <>
      {product.map((product, index) => (
        <Col xs={6} md={4} lg={3}>
          <Card key={index}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Cards;
