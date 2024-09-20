import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Cards from "./components/cards/Cards";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Cards product={product} />
        </Row>
      </Container>
    </>
  );
}

export default App;
