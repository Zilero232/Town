import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add("mobile-open");
    } else {
      document.body.classList.remove("mobile-open");
    }
  }, [isMenuOpened]);

  const onToggleBar = () => {
    setIsMenuOpened((x) => !x);
  };

  return (
    <header className={`header`}>
      <NavLink to={{ pathname: "/" }} className="logo">
        <img src="images/logo.svg" alt="" />
      </NavLink>
      <nav className="menu">
        <li>
          <NavLink to={{ pathname: "/profile" }} activeClassName="active">
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/auth" }} activeClassName="active">
            Авторизация
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/register" }} activeClassName="active">
            Регистрация
          </NavLink>
        </li>
      </nav>
      <button className="bar" onClick={onToggleBar}>
        <div className="bar__item"></div>
        <div className="bar__item"></div>
        <div className="bar__item"></div>
      </button>
    </header>
  );
}

export default Header;
