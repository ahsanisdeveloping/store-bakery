import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import '../styles/Register.css'
const Register = ({loginFlag}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSuffle = () => {
    loginFlag(prev=>!prev);
  }
  return (<div className="registerMain">
  <div className="registerFormDiv">
    <h1 className="registerFormHeading">Register Form</h1>
    <Form className="registerForm" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="buttonDiv">
      <Button type="submit" className="registerButton">Submit</Button>
      </div>
    </Form>
    <div><span className="clickHereSpan">Already Registered? <span onClick={handleSuffle} className="clickHere">Log in</span></span></div>
  </div>
</div>);
};

export default Register;
