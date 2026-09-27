import styles from "./Item.module.css";

export const Item = ({ name, author, price, image, editorial, year }) => {
  return (
    <article className={styles.card}>
      <img src={image} alt={name} />
      
      <p className={styles.author}>Autor: {author}</p>
      <p className={styles.editorial}>Editorial: {editorial} ({year})</p>
      <p className={styles.price}>${price}</p>
    </article>
  );
};