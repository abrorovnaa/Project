import { Link } from "react-router-dom";
import Logo from "../../assets/images/sofin_logo.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="container-xxl">
        <header>
          <div className="container">
            <div className="header">
              <Link to={"/"}>
                <img src={Logo} alt="Error" />
              </Link>
              <Link to={"/company"}>Kompaniya</Link>
              <Link to={"/"}>Xarid qilish</Link>
              <Link to={"/products"}>Mahsulotlar</Link>
              <Link to={"/"}>Media</Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
