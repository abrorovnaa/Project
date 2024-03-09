import { useUserContext } from "../../homecontex";
import "./product-button.scss";
const ProductButton = ({ img, title, id }) => {
  const { itemProductId, setItemsProductId } = useUserContext();
  const handeClick = () => {
    setItemsProductId(id);
  };
  return (
    <>
      <div className={`${id === itemProductId ? "product-button active" : "product-button"}`}>
        <button onClick={handeClick}>
          <img src={img} alt="Error" />
        </button>
        <p>{title}</p>
      </div>
    </>
  );
};
export default ProductButton;
