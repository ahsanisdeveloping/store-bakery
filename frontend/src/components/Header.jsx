import { Link } from "react-router-dom";
import '../styles/Header.css'
const Header = () => {
    return ( 
        <div className="headerMain">
            <Link className="headerLink" to='./'>Auth</Link>
            <Link className="headerLink" to='add-product'>Add Product</Link>
            <Link className="headerLink" to='manage-products'>Manage Products</Link>
        </div>
     );
}
 
export default Header;