import "./connect-inner.scss";

const ConnectInner = () => {
  return (
    <>
      <div className="connect-card">
        <h1>Biz bilan bog'laning va hamkorimizga aylaning</h1>
        <div className="connect-input">
          <form>
            <label htmlFor="name">Ism-familiya</label>
            <input
              id="name"
              type="text"
              placeholder="Ism, familiyangizni kiriting:"
            />

            <label htmlFor="phone">Telefon raqam</label>
            <input
              id="phone"
              type=""
              placeholder="Telefon raqamingizni kiriting:"
            />

            <label htmlFor="suggest">Taklif</label>
            <textarea
              className="suggests"
              id="suggest"
              cols="30"
              rows="10"
              placeholder="Takliflaringizni yozing:"
              style={{ resize: "none" }}
            ></textarea>

            <button type="submit">Yuborish</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ConnectInner;
