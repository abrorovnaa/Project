import FirstProduct from "../../assets/images/qatiq_menu.png";
import SecondProduct from "../../assets/images/qaymoq_menu.png";
import Thirdroduct from "../../assets/images/tvorak_menu.png";
import FourthProduct from "../../assets/images/ayron_menu.png";
import ProductButton from "../product-button";
import { useEffect, useState } from "react";

import "./product-cards.scss";
import { useUserContext } from "../../homecontex";
const ProductCards = () => {
  const { itemProductId, setItemsProductId } = useUserContext();
  console.log(itemProductId, "itemProductId");
  const data = [
    {
      img: FirstProduct,
      title: "Qatiq",
      id: 0,
    },
    {
      img: FourthProduct,
      title: "Ayron",
      id: 1,
    },
    {
      img: SecondProduct,
      title: "Qaymoq",
      id: 2,
    },
    {
      img: Thirdroduct,
      title: "Tvorog",
      id: 3,
    },
    {
      img: FirstProduct,
      title: "Qatiq",
      id: 4,
    },
    {
      img: FourthProduct,
      title: "Ayron",
      id: 5,
    },
    {
      img: FourthProduct,
      title: "Test001",
      id: 6,
    },
  ];
  const carddata = [
    {
      img: FirstProduct,
      title: "Qatiq",
      id: 0,
    },
    {
      img: FourthProduct,
      title: "Ayron",
      id: 1,
    },
    {
      img: SecondProduct,
      title: "Qaymoq",
      id: 2,
    },
    {
      img: Thirdroduct,
      title: "Tvorog",
      id: 3,
    },
    {
      img: FirstProduct,
      title: "Qatiq",
      id: 4,
    },
    {
      img: FourthProduct,
      title: "Ayron",
      id: 5,
    },
    {
      img: FourthProduct,
      title: "Test001 text",
      id: 6,
    },
  ];

  console.log(itemProductId,'itemProductId');
  return (
    <>
      <div className="container-xxl">
        <div className="all-product-cards">
          <div className="container">
            <div className="product-cards">
              <h1>Mahsulotlar</h1>
              <div className="card-buttons">
                {data?.map((i, k) => (
                  <ProductButton
                    img={i.img}
                    id={i.id}
                    title={i.title}
                  />
                ))}
              </div>
              <div>
                {carddata.map((item, key) => (
                  <h1>{item.id === itemProductId && item.title}</h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCards;
