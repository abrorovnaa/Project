import ProduceImg from "../../assets/images/Слой_x0020_1.png";
import ProduceSeconddImg from "../../assets/images/download 1.png";
import "./produce.scss";

const Produce = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="all-produce">
          <div className="container">
            <div className="produce">
              <h1>Sofin qanday yaratiladi?</h1>
              <div className="produce-card-top">
                <p>
                  Eko fermamizda siz uchun sof tabiiy sigir sutini yetishtiramiz
                </p>
                <div className="produce-card-img">
                  <img src={ProduceImg} alt="" />
                </div>
              </div>
                <div className="produce-card-bottom">
                  <h1>
                    500 metrdagi sutni qayta ishlash zavodimizga keltirib yangi
                    va sifatli mahsulot ishlab chiqaramiz
                  </h1>
                  <div className="produce-card-main">
                    <div className="card-main-img">
                    <img src={ProduceSeconddImg} alt="Error" />
                    </div>
                    <p>
                      Mehr bilan tayyorlangan mahsulotlarimiz siz va sizning
                      oilangiz uchun!
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Produce;
