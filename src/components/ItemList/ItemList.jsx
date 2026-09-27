import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className = {styles.productsContainer}>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};