import ProductInner from "../product-inner";
import FirstProduct from "../../assets/images/Frame 1 (21).png";
import SecondProduct from "../../assets/images/Frame 1 (18).png";
import ThirdProduct from "../../assets/images/Frame 2.png";
import FourthProduct from "../../assets/images/Frame 1 (19).png";
import FifthProduct from "../../assets/images/Frame 1 (20).png";

const Products =()=>{
    const data = [
        
        {
            img:FirstProduct,
            text:"Vitaminlarga boy mevali yogurtlar!",
            btn:"Mahsulotni ko'rish"
        },
        
        {
            img:SecondProduct,
            text:"Ekologik toza sutdan tayyorlangan kefirlar!",
            btn:"Mahsulotni ko'rish",
            style:"row-reverse"

        },
        
        {
            img:ThirdProduct,
            text:"Mevali muzdek kokteyllar",
            btn:"Mahsulotni ko'rish"

        },
        
        {
            img:FourthProduct,
            text:"Nonushta uchun mazali qaymoqlar!",
            btn:"Mahsulotni ko'rish",
            style:"row-reverse"


        },
        {
            img:FifthProduct,
            text:"Boshqa turdagi sut mahsulotlari",
            btn:"Mahsulotni ko'rish",

        },

        
    ]
    return(
        <>  
            <div className="container-xxl">
                <div className="all-products">
                    <div className="container">
                        <div className="products">
                            {data?.map((i,k)=>(
                            <ProductInner
                            img={i.img}
                            text={i.text}
                            btn={i.btn}
                            style={i.style}
                             />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;