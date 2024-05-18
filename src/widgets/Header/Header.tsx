import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.adress}>
        <span>пр. Комсомольский 39</span>
        <span>
          <span className={`pink ${style.time}`}>с 10.00 до 22.00</span>
          <p>(запись обязательна)</p>
        </span>
      </div>
      <div className={style.logo}>
        <p className={style.logoText}>Ареал виртуальной реальности</p>
        <img src="/images/newLogo.png" alt="Логотип" />
      </div>
      <div className={style.contacts}>
        <p className={`pink ${style.phones}`}>
          <a href="tel:+79962335623">+7 996 233 56 23</a>
        </p>
        <div className={style.socialIcons}>
          <a href="https://vk.com/areal_vr/">
            <img src="/images/vk.svg" alt="Vkontakte" />
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
