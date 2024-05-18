"use client";
import { useState } from "react";
import s from "./BurgerMenu.module.css";
import Menu from "./Menu/Menu";

function BurgerMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", href: "/" },
    { value: "Новости", href: "/news" },
    { value: "Аренда Клуба", href: "/clubrent" },
    { value: "Акции", href: "/promotions" },
    { value: "Цены", href: "/price" },
    { value: "Игры", href: "/games" },
    { value: "Фотогалерея", href: "/gallery" },
    { value: "Сертификаты", href: "/certificates" },
    { value: "Контакты", href: "/contacts" }
  ];
  return (
    <>
      <nav className={s.nav} onClick={() => setMenuActive(!menuActive)}>
        <div
          className={
            menuActive ? `${s.burgerBtn} ${s.burgerBtnActive}` : s.burgerBtn
          }
        >
          <span />
        </div>
      </nav>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header="Меню"
        items={items}
      />
    </>
  );
}

export default BurgerMenu;
