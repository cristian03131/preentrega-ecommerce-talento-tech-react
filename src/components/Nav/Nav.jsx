import {NavLink} from "react-router-dom";
import styles from "./Nav.module.css"

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
         <NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>

        </li>
        <li>
         <NavLink to="/carrito" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Carrito</NavLink>
        </li>
      </ul>
    </nav>
  );
};