import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [login, setLogin] = useState("");
  return (
    <div className="auth">
      <div
        className="register"
        style={{ backgroundImage: `url("images/banner.jpg")` }}
      >
        <div className="container">
          <Header />

          <div className="register__form">
            <h2 className="register__form-title">авторизация</h2>
            <div className="register__form-wrapper">
              <div className="register__form-input">
                <label htmlFor="">логин</label>
                <input
                  value={login}
                  onInput={(e) => setLogin(e.target.value)}
                  type="text"
                />
              </div>

              <div className="register__form-input">
                <label htmlFor="">ПАРОЛЬ</label>
                <input type="password" />
              </div>

              <div className="register__form-submit">
                <NavLink
                  to={{
                    pathname:
                      login === "admin" ? "/profile?admin=true" : "/profile",
                  }}
                >
                  <img src="images/auth-submit.svg" alt="" />
                </NavLink>
              </div>

              <div className="register__form-text">
                или авторизоваться С ПОМОЩЬЮ
              </div>

              <div className="register__form-social">
                <button className="register__form-sber btn">
                  <div className="btn__icon">
                    <img src="images/sber-icon.png" alt="" />
                  </div>
                  <div className="btn__text">СБЕР ID</div>
                </button>
                <button className="register__form-vk btn">
                  <div className="btn__icon">
                    <img src="images/vk-icon.png" alt="" />
                  </div>
                  <div className="btn__text">Вконтакте</div>
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
