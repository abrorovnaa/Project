import FirstProduct from "../../assets/images/qatiq_menu.png";
import SecondProduct from "../../assets/images/qaymoq_menu.png";
import Thirdroduct from "../../assets/images/tvorak_menu.png";
import FourthProduct from "../../assets/images/ayron_menu.png";
import ProductButton from "../product-button";
import "./product-cards.scss"
const ProductCards =()=>{
    const data =[
        {
            img: FirstProduct,
            title: "Qatiq",
        },
        {
            img:FourthProduct,
            title:"Ayron" ,
        },
        {
            img:SecondProduct ,
            title:"Qaymoq" ,
        },
        {
            img:Thirdroduct ,
            title:"Tvorog" ,
        },
        {
            img: FirstProduct,
            title: "Qatiq",
        },
        {
            img:FourthProduct,
            title:"Ayron" ,
        },
        
    ]
    return(
        <>
        <div className="container-xxl">
            <div className="all-product-cards">
                <div className="container">
                    <div className="product-cards">
                        <h1>Mahsulotlar</h1>
<div className="card-buttons">
    {data?.map((i,k)=>(
        <ProductButton img={i.img} title={i.title} />
    ))}
</div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default ProductCards ;