import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3>Librería Universo</h3>
        <p>Desde el Big Bang • Todos los derechos reservados &copy; 2026</p>
      </div>
    </footer>
  );
};