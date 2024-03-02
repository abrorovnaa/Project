import ConnectInner from "../connect-inner";
import "./connect.scss";


const Connect = () => {
  return (
    <>
      <div className="container-xxl">
        <div id="connect" className="all-connect">
          <div className="container">
            <div className="connect">
              {/* <div className="connect-left"></div> */}
              <div className="connect-right"> 
               <ConnectInner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Connect;
