import "../styles/Competition.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Competition = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbarLeft">
          <span className="navbarLogo">This is Logo</span>
        </div>
        <div className="navbarRight">
          <div className="navbarRightSpan">
            <span>Home</span>
            <span>About</span>
            <span>Contact Us</span>
            <span>Dummy</span>
            <span>Dummy</span>
            <span>Dummy</span>
            <button><img className="navbarIconImage" src="http://dummyimage.com/229x100.png/5fa2dd/ffffff" alt="" /></button>
            <button><img className="navbarIconImage" src="http://dummyimage.com/229x100.png/5fa2dd/ffffff" alt="" /></button>
            <button><img className="navbarIconImage" src="http://dummyimage.com/229x100.png/5fa2dd/ffffff" alt="" /></button>
          </div>
          <div className="navbarRightIcons">
            
            </div>
        </div>
      </div>
      <div className="main">
        <h1 className="mainText">Simple & Lovely</h1>
      </div>
      <div className="third">
        <div className="thirdTop">
          <div className="thirdTopLeft">
            <span>Some Text</span>
          </div>
          <div className="thirdTopRight">
            <span>Text1</span>
            <span>Text2</span>
            <span>Text3</span>
            <span>Text4</span>
            <span>Text5</span>
          </div>
        </div>
        <div className="thirdImageDiv">
          <img src="http://dummyimage.com/229x100.png/5fa2dd/ffffff" />
          <img src="http://dummyimage.com/229x100.png/5fa2dd/ffffff" />
          <img src="http://dummyimage.com/229x100.png/5fa2dd/ffffff" />
        </div>
      </div>
    </div>
  );
};

export default Competition;
