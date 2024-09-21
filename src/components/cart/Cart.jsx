import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function Cart(product) {
  console.log(product);

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
