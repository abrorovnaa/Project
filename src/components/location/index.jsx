import LocationCard from "../location-card";
import Number from "../../assets/images/phonee.png";
import Map from "../../assets/images/mep.png";
import Site from "../../assets/images/www.png";
import "./location.scss";

const Location = () => {
  const data = [
    {
      img: Map,
      text: "Navoiy viloyati Qiziltepa tumani Bo‘ston MFY, Alisher Navoiy massivi-2",
    },
    { img: Number, text: "+998 94 370 11 88" },
    { img: Site, text: "www.sofin.uz" },
  ];
  return (
    <>
      <div className="container-xxl">
        <div className="all-location">
          <div className="container">
            <div className="location">
              <div className="location-cards">
                <div className="card-left">
                  {data?.map((i, k) => (
                    <LocationCard img={i.img} text={i.text} />
                  ))}
                </div>
                <div className="card-right">
                  <iframe className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.2501522079317!2d64.85846925804947!3d40.05574234786651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5047b9a50ce1d3%3A0xf937251d9ba0e751!2sSOFIN!5e1!3m2!1sru!2s!4v1600143653383!5m2!1sru!2s"
                    frameborder="0"
                    width={"100%"}
                    height={"100%"}
                    allowFullScreen
                    title="map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Location;
