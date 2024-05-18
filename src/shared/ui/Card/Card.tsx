import s from "./Card.module.css";

interface ListItems {
  listTitle: string;
  listItems: string[];
}

export interface CardProps {
  title: string;
  trailer?: string;
  image: string;
  date?: string;
  description: string;
  genre?: string;
  mode?: string;
  list?: ListItems;
  items?: string[];
}

export const Card = (props: CardProps) => {
  const {
    title,
    trailer,
    image,
    genre,
    description,
    list,
    mode,
    date,
    items
  } = props;
  return (
    <div className={s.card} key={title}>
      <h3 className={s.cardTitle_portrait}>{title}</h3>
      <div className={s.cardImage}>
        <a href={trailer} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
          {genre && (
            <img className={s.playIcon} src="/images/play.png" alt="Play" />
          )}
        </a>
      </div>
      <div className={s.cardDescription}>
        <h3 className={s.cardTitle_landscape}>{title}</h3>
        <p className={s.cardDescriptionText}>{description}</p>
        {/*<div className={s.cardDetails}>*/}
          {list && (
            <p className={s.cardDescriptionSubtitle}>{list.listTitle}</p>
          )}
          {list && (
            <ul>
              {
                list.listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))
              }
            </ul>
          )}
          {items && (
            <>
              {
                items.map((item) => (
                  <p key={item} className={s.item}> {item}</p>
                ))
              }
            </>
          )}
          {genre && <p className={s.cardDescriptionSubtitle}>Об игре:</p>}
          {genre && (
            <ul>
              <li>
                <span className={s.bold}>Жанр:</span> {genre}
              </li>
              <li>
                <span className={s.bold}>Режимы:</span> {mode}
              </li>
            </ul>
          )}
          {date && (
            <p className={s.newsDate}>{date}</p>
          )}
        {/*</div>*/}
      </div>
    </div>
  );
};
