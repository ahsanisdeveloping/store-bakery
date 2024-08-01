import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/Login.css";
const Login = ({loginFlag}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSuffle = () => {
    loginFlag(prev=>!prev);
  };
  return (
    <div className="loginMain">
      <div className="loginFormDiv">
        <h1 className="loginFormHeading">Login</h1>
        <Form className="loginForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 loginFormGroup" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 loginFormGroup" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="buttonDiv">
            <Button type="submit" className="loginButton">
              Login
            </Button>
          </div>
        </Form>
        <div>
          <span className="clickHereSpan">
            Not Already Registered?{" "}
            <span onClick={handleSuffle} className="clickHere">
              Click here
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
