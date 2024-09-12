import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards({ product }) {
  return (
    <>
      {product.map((product, index) => (
        <Col xs={6} md={4} lg={3} key={index} className="p-2 mb-2">
          <Card style={{background: '#FFF8E8'}}>
            <Card.Img style={{height: '200px', objectFit: 'contain' , padding: '10px'}} variant="top" src={product.image}/>
            <Card.Body>
              <Card.Title style={{maxHeight: '20px', overflow: 'hidden'}}>{product.title}</Card.Title>
              <Card.Text style= {{maxHeight: '78px', overflow: 'hidden'}}>{product.description}</Card.Text>
              <Button className="text-white" variant="dark" style={{background: '#603F26'}}>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
))}
    </>
  );
}

export default Cards;
