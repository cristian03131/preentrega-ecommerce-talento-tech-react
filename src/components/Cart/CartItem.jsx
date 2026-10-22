import { useCart } from "../../context/CartContext";
import "./Cart.css"; // O tu archivo de estilos correspondiente

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <img 
        src={`${import.meta.env.BASE_URL}${item.image?.replace(/^\//, '')}`} 
        alt={item.name} 
        className="cart-item-image" 
      />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>Autor: {item.author}</p>
        <p className="cart-item-price">Precio: ${item.price}</p>
      </div>
      <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};