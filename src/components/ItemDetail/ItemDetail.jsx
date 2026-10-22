import styles from "./ItemDetail.module.css";
import { useCart } from "../../context/CartContext"; // 1. Importamos el hook del carrito

export const ItemDetail = ({ image, id, name, author, editorial, year, description, price, category }) => {
    const { addItem } = useCart(); // 2. Extraemos la función addItem

    
    const item = { image, id, name, author, editorial, year, description, price, category };

    return(
        <article className={styles.itemDetail}>
            {/* Columna de la imagen */}
            <div className={styles.imageContainer}>
                <img src={`${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`} alt={name} className={styles.image} />
            </div>

            {/* Columna de la información */}
            <div className={styles.info}>
                <span className={styles.category}>{category}</span>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.author}>Autor: <strong>{author}</strong></p>
                
                <p className={styles.description}>{description}</p>
                
                <p className={styles.meta}>Editorial: {editorial}</p>
                <p className={styles.meta}>Año: {year}</p>
                <p className={styles.meta}>Id: {id}</p>
                
                <div className={styles.price}>${price}</div>
                
                {/* 3. Conectamos el botón con el evento onClick */}
                <button 
                    className={styles.button}
                    onClick={() => addItem(item)}
                >
                    Agregar al carrito
                </button>
            </div>
        </article>
    );
};