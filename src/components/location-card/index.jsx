import { Link } from "react-router-dom";
import "./location-card.scss";

const LocationCard = ({img,text}) => {
  return <div className="location-card">
    <img src={img} alt="Error" />
    <Link to={"/"}>{text}</Link>
  </div>;
};
export default LocationCard;
