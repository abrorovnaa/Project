import "./about-card.scss"


const AboutCard =({img,title,amount})=>{
    return(
        <>  
            <div className="about-card">
                <div className="about-card-left">
                    <img src={img} alt="Error" />
                </div>
                <div className="about-card-right">
                    <p>{title}</p>
                    <h1>{amount}</h1>
                </div>
            </div>
        </>
    )
}
export default AboutCard;