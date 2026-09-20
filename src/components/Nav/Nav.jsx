import {Link} from "react-router-dom";
import styles from "./Nav.module.css"

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
         <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to={"/carrito"} className={styles.navLink}>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};