function Home() {
  return (
    <div
      className="register"
      style={{ backgroundImage: `url("images/banner.jpg")` }}
    >
      <div className="container">
        <div className="register__form">
          <h2 className="register__form-title">авторизация</h2>
          <div className="register__form-wrapper">
            <div className="register__form-input">
              <label htmlFor="">логин</label>
              <input type="text" />
            </div>

            <div className="register__form-input">
              <label htmlFor="">ПАРОЛЬ</label>
              <input type="password" />
            </div>

            <div className="register__form-submit">
              <input type="submit" value="Входи если поспеешь" />
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
  );
}

export default Home;