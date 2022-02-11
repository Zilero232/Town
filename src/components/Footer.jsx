function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper-block">
            <div className="footer__wrapper-block_title">навигация</div>
            <ul className="footer__wrapper-spisok">
              <li>
                <a href="/">о проекте</a>
              </li>
              <li>
                <a href="/">партнеры</a>
              </li>
              <li>
                <a href="/">контакты</a>
              </li>
            </ul>
          </div>

          <div className="footer__wrapper-block">
            <div className="footer__wrapper-block_title">контакты</div>
            <ul className="footer__wrapper-spisok">
              <li>
                174411, Новгородская область, <br /> Боровичский р-н, г.
                Боровичи, <br />
                Коммунарная ул., д.48 E-mail: admin@boradmin.ru
              </li>
              <li>
                <a className="phone" href="tel:+78166491208">
                  <span>Телефон:</span> +7(81664)91-208
                </a>
              </li>
              <li>
                <a className="email" href="mailto:admin@boradmin.ru">
                  <span>E-mail:</span> admin@boradmin.ru
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__wrapper-block">
            <div className="footer__wrapper-block_title">при поддержке</div>
            <ul className="footer__wrapper-spisok">
              <li>
                <div className="footer__wrapper-spisok_img">
                  <img src="images/gerb-icon.png" alt="" />
                </div>
                <div className="footer__wrapper-spisok_content">
                  <div className="footer__wrapper-spisok_title">
                    администрация боровичского муниципального района
                  </div>
                </div>
              </li>

              <li>
                <div className="footer__wrapper-spisok_img">
                  <img src="images/combinat-icon.png" alt="" />
                </div>
                <div className="footer__wrapper-spisok_content">
                  <div className="footer__wrapper-spisok_title">
                    АКЦИОНЕРНОЕ ОБЩЕСТВО
                  </div>
                  <div className="footer__wrapper-spisok_text">
                    Боровичский комбинат огнеупоров
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
