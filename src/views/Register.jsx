function Home() {
  return (
    <div
      className="register"
      style={{ backgroundImage: `url("images/banner.jpg")` }}
    >
      <div className="container">
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
              <input type="submit" value="Зарегестироваться" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
