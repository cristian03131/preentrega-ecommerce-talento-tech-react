import { useCart } from "../../context/CartContext";
import "./Cart.css";
export const CartSummary = () => {
  const { getCartTotal, checkout, clearCart } = useCart();

  const total = getCartTotal();

  return (
    <>
    <div className="card">
      <p className="parrafo-Total-Pagar">TOTAL A PAGAR:👉 <span className="total-pagar">${total}</span> </p>
      <button className="btn bg-success primary" onClick={checkout}>
        FINALIZAR COMPRA ✓
      </button>

      <button className="btn-vaciar" onClick={clearCart}>
       Vaciar carrito 🗑️
      </button>
     </div>
    </>
  );
};