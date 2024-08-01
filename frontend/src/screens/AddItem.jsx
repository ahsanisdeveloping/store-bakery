import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/AddItem.css";
const AddItem = () => {
  const handleSubmit = () => {
    alert("i've been submitted!");
  };
  return (
    <div className="addItemMain">
      <div className="titleDiv">
        <h1>Add Product Page</h1>
      </div>
      <div className="formDiv">
        <Form className="itemForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control className="addItemInputs" type="text" placeholder="Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control className="addItemInputs" type="number" placeholder="Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control className="addItemInputs" type="text" placeholder="Product Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label>Select Image</Form.Label>
            <Form.Control className="addItemInputs" type="file" placeholder="Password" />
          </Form.Group>
          <div className="buttonDiv">
            <Button type="submit" className="loginButton">
              Add Item
            </Button> 
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddItem;
