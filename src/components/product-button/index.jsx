import "./product-button.scss";
const ProductButton = ({img,title}) => {
    return(
        <>
        <div className="product-button">
            <button><img src={img} alt="Error" /></button>
            <p>{title}</p>
        </div>
        </>
    )
}
export default ProductButton;