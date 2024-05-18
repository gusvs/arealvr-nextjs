// "use client";
import s from "./GamesGenres.module.css";
import Link from "next/link";

export const GamesGenres = () => {
  return (
    <div className={s.card}>
      <h3>Популярные игры</h3>
      <div className={s.cardImages}>
        <div>
          <img src="/images/games/ArizonaSunshine.jpg" alt="Arizona Sunshine" />
          <p>Экшены</p>
        </div>
        <div>
          <img src="/images/games/PavlovVR.jpg" alt="Pavlov VR" />
          <p>Шутеры</p>
        </div>
        <div>
          <img src="/images/games/jobSimulator.jpg" alt="Job Simulator" />
          <p>Симуляторы</p>
        </div>
        <div>
          <img src="/images/games/TheForest.jpg" alt="The Forest" />
          <p>Хорроры</p>
        </div>
        <div>
          <img src="/images/games/HalfLifeAlyx.jpg" alt="Half Life Alyx" />
          <p>Приключения</p>
        </div>
        <div>
          <img
            src="/images/games/RichiesPlankExperience.jpg"
            alt="Richies Plank Experience"
          />
          <p>Казуальные</p>
        </div>
      </div>
      <Link href="/games" className={s.linkGames}>
        Все игры
      </Link>
    </div>
  );
};