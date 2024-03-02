// import Cow from "../../assets/images/cow.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/softex.png";
import Grass from "../../assets/images/grass.png";
import "./footer.scss"

const Footer = () => {
  return (
    <div className="container-xxl">
      <footer>
        <div className="container">
          <div className="footer">
            {/* <img src={Cow} alt="Error" /> */}
            {/* <div className="footer-top"> */}
            <div className="cow"></div>
            <div className="founder">
              <p>Sayt yaratuvchisi</p>
              <Link to={"/"}>
                <img src={Logo} alt="" />
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <img src={Grass} alt="" />
        </div>
      </footer>
    </div>
  );
};
export default Footer;
