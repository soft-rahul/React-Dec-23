import { LOGO_URL } from "../Constant/restData";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li> <a href="/"> Home </a> </li>
          <li> <a href="/about">About us</a> </li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
