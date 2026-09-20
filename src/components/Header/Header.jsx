import { Nav } from "../Nav/Nav";
import {Link} from "react-router-dom";
import logo from "../../assets/logo-libreria.png";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
          <div>
            <Link to={"/"}>
               <img className={styles.img} src={logo} alt="logo de la libreria"/>
            </Link>
          </div>
         <Nav/>
        </header>
    )
}