import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { productsArray } from "../data/MockData";
import { useState } from "react";
import "../styles/ManageItems.css";
const ManageItems = () => {
  const [products, setProducts] = useState(productsArray);
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product)=>product._id !== id)
    setProducts(updatedProducts);
  }
  return (
    <div className="mProductsMain" >
        <h1 className="mProductsHeading">Manage Products</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img className="productImage" src={product.image} />
              </td>
              <td>
                <Button className="bg-primary">Edit</Button>
                <Button className="bg-danger" onClick={()=>{handleDelete(product._id)}}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageItems;
