import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../components/Register";
import Login from "../components/Login";
import "../styles/Auth.css";
import LearnMore from "../components/LearnMore";
import { useState } from "react";
const Auth = () => {
  const [login,setLogin] = useState(true);

  return (
    <div className="authMain">
      <h1 className="introHeading">Welcome to Mama's Little Bakery</h1>
      <div className="content">
        <div className="introDiv">
          <p className="introParagraph">
            Indulge in the sweet symphony of flavors and aromas that dance
            through the air, welcoming you to our cozy corner of culinary
            delight. Nestled in the heart of Jauharabad.
          </p>
          <p className="introParagraph">
            Mama's Little Bakery is not just a place to savor delectable treats;
            it's a warm embrace of homemade goodness, where every bite tells a
            story of love and tradition.
          </p>
          <button to="/learn-more" className="introButton">Learn More</button>
        </div>
        <div className="loginDiv">
          {
            login?<Login loginFlag={setLogin}/>:<Register loginFlag={setLogin}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Auth;
