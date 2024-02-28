import FirstProduct from "../../assets/images/first_product.png";
import SecondProduct from "../../assets/images/mahsulot2.png";
import ThirdProduct from "../../assets/images/kokteyl.png";
import FourthProduct from "../../assets/images/sofin_product.png";
import "./banner.scss";
import BannerImg from "../banner-img";

const Banner = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="all-banner">
          <div className="container">
            <div className="banner">
              <div className="first-product">
                <BannerImg img={FirstProduct} />
              </div>
              <div className="second-product">
                <BannerImg img={SecondProduct} />
              </div>
              <div className="third-product">
                <BannerImg img={ThirdProduct} />
              </div>
              <div className="fourth-product">
                <BannerImg img={FourthProduct} />
              </div>
              <div className="fifth-product">
                <BannerImg img={SecondProduct} />
              </div>
              <div className="sixth-product">
                <BannerImg img={FourthProduct} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
