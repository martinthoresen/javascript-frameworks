import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ShoppingCartIcon() {
  const cart = useSelector((state) => state.cart);
  const initialValue = 0;
  const itemsInCart = cart.cart.reduce((accumulator, current) => accumulator + current.quantity, initialValue);
  return (
    <Link to="/cart" className="btn btn-dark">
      <FontAwesomeIcon icon={icon({ name: "cart-shopping" })} />
      <p>{itemsInCart} items in cart</p>
    </Link>
  );
}

export default ShoppingCartIcon;
