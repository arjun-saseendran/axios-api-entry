import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function Cart() {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .then((response) => setProduct(...product, response.data));
  }, []);

  return (
    <>
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
          <tr>
            <td>1</td>
            <td>{product.title}</td>
            <td>
              <img src={product.image} style={{ height: "50px" }} />
            </td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>delete</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
