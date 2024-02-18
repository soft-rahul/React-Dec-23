import { LOGO_URL } from "../Constant/restData";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={LOGO_URL} alt="" />{" "}
        </Link>
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li>
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About us </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contacts"> Contact Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/cart"> Cart </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
