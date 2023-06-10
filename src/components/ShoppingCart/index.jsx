import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../Utility/cartSlice";
import percentageSale from "../Utility/percentageSale";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  // const dispatch = useDispatch();

  return (
    <div>
      {cart.cart.map((cartItem) => (
        <div key={"cart." + cartItem.id} className="p-1">
          <img src={cartItem.imageUrl} alt={cartItem.title} className="product-image"></img>
          <h2>{cartItem.title}</h2>
          <p>$ {cartItem.discountedPrice}</p>
          {cartItem.discountedPrice === cartItem.price ? <div></div> : <p className="text-danger">{percentageSale(cartItem.price, cartItem.discountedPrice)}</p>}
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
