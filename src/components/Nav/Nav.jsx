import {NavLink} from "react-router-dom";
import styles from "./Nav.module.css"
import { useCart } from "../../context/CartContext";

export const Nav = () => {

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className={styles.ul}>
        <li>
         <NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>

        </li>
        <li>
         <NavLink to="/carrito" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Carrito {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};