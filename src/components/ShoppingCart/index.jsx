import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../Utility/cartSlice";
import percentageSale from "../Utility/percentageSale";
import { Button, Form, FormCheck } from "react-bootstrap";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  console.log(cart.cart.length);
  return cart.cart.length === 0 ? (
    <div>
      <h1 className="text-center">Your Cart</h1>
      <p className="text-center m-5">
        You have no items in your cart. <a href="/">Browse products...</a>
      </p>
    </div>
  ) : (
    <div>
      <h1 className="text-center">Your Cart</h1>
      {cart.cart.map((cartItem) => (
        <div key={"cart." + cartItem.id} className="p-1">
          <img src={cartItem.imageUrl} alt={cartItem.title} className="product-image"></img>
          <h2>{cartItem.title}</h2>
          <p>$ {cartItem.discountedPrice}</p>
          {cartItem.discountedPrice === cartItem.price ? <div></div> : <p className="text-danger">{percentageSale(cartItem.price, cartItem.discountedPrice)}</p>}
          <Form className="d-flex">
            <p>Quanitity:</p>
            <Button
              onClick={() => {
                dispatch(decrementQuantity(cartItem));
              }}
            >
              -
            </Button>
            <FormCheck disabled>{cartItem.quantity}</FormCheck>
            <Button
              onClick={() => {
                dispatch(incrementQuantity(cartItem));
              }}
            >
              +
            </Button>
          </Form>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
