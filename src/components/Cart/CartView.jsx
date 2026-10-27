import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1 class="titulo">Tu carrito de compras</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">El carrito esta vacío 😕</p>
          <Link className="btn primary bg-primary btn-volver" to={"/"}>
            Volver
          </Link>
        </>
      )}
    </section>
  );
};