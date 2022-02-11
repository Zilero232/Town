import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="auth">
      <div
        className="register"
        style={{ backgroundImage: `url("images/banner.jpg")` }}
      >
        <div className="container">
          <Header />

          <div className="register__form">
            <h2 className="register__form-title">Регистрация</h2>
            <div className="register__form-wrapper">
              <div className="register__form-input">
                <label htmlFor="">ФИО</label>
                <input type="text" />
              </div>

              <div className="register__form-input">
                <label htmlFor="">логин</label>
                <input type="text" />
              </div>

              <div className="register__form-input">
                <label htmlFor="">ПАРОЛЬ</label>
                <input type="password" />
              </div>

              <div className="register__form-input">
                <label htmlFor="">Повторите пароль</label>
                <input type="password" />
              </div>

              <div className="register__form-submit">
                <button type="submit">
                  <img src="images/auth-submit.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
