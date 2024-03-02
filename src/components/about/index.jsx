import FirstImg from "../../assets/images/cow.png";
import SecondImg from "../../assets/images/people.png";
import ThirdImg from "../../assets/images/milc.png";
import AboutCard from "../about-card";
import "./about.scss";
const About = () => {
    const data =[
        {
            img:FirstImg,
            title:"Fermer xo'jalikdagi qoramollar soni",
            amount:"1000+"
        },
        {
            img:SecondImg,
            title:"Ishchi xodimlar soni",
            amount:"200+"
        },
        {
            img:ThirdImg,
            title:"Sut mahsulotlarini turlari",
            amount:"50+"
        }
    ]
  return (
    <div className="container-xxl">
      <div className="about-company">
        <div className="container">
          <div className="about">
           <div className="about-title">
           <h1>Biz haqimizda</h1>
           </div>

            <div className="about-cards">
              <div className="about-card-title">
              <h1>
                “Sofin” bu “Yangi asr” fermer xo’jaligi tomonidan tashkil
                etilgan savdo belgisi bo’lib tabiiy sut mahsulotlarini qayta
                ishlashga ixtisoslashtirilgan korxona hisoblanadi.
              </h1>
              </div>
              <div className="about-products">
                {data?.map((i,k)=>(
                    <AboutCard
                    img={i.img}
                    title={i.title}
                    amount={i.amount}
                     />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
