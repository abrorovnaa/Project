import "./product-inner.scss";


const ProductInner = ({img,text,btn,style}) => {
  return (
    <>
      <div className="product-card" style={{
        flexDirection: style}}>
        <div className="card-left">
          <img src={img} alt="" />
        </div>
        <div className="card-right">
            <h1>{text}</h1>
            <button>{btn}</button>
        </div>
      </div>
    </>
  );
};

export default ProductInner;
