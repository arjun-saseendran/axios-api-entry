import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Container from "react-bootstrap";
import Row from "react-bootstrap";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <Row>
        <h1 className="text-center m-5">Cart</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>1</td>
                    <td>{product.title}</td>
                    <td>
                      <img src={product.image} style={{ height: "50px" }} />
                    </td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>delete</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Cart is empty</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default Cart;
