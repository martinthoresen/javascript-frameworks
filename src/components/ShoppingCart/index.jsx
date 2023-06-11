import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../Utility/cartSlice";
import percentageSale from "../Utility/percentageSale";
import { Button, Form } from "react-bootstrap";
import cartTotal from "../Utility/cartTotal";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return cart.cart.length === 0 ? (
    <div>
      <h1 className="text-center">Your Cart</h1>
      <p className="text-center m-5">
        You have no items in your cart. <a href="/">Browse products...</a>
      </p>
    </div>
  ) : (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center">Your Cart</h1>
      {cart.cart.map((cartItem) => (
        <div key={"cart." + cartItem.id} className="p-1 flex-row d-flex">
          <img src={cartItem.imageUrl} alt={cartItem.title} className="cart-image m-1"></img>
          <div className="justify-content-start d-flex flex-column m-1">
            <h2>{cartItem.title}</h2>
            <p>${cartItem.discountedPrice}</p>
            {cartItem.discountedPrice === cartItem.price ? <div></div> : <p className="text-danger">{percentageSale(cartItem.price, cartItem.discountedPrice)}</p>}
            <Form className="d-flex flex-column">
              <p className="text-center">Quanitity:</p>
              <div className="d-flex">
                <Button
                  onClick={() => {
                    dispatch(decrementQuantity(cartItem));
                  }}
                >
                  -
                </Button>
                <Form.Control className="" type="text" placeholder={cartItem.quantity} readOnly />
                <Button
                  onClick={() => {
                    dispatch(incrementQuantity(cartItem));
                  }}
                >
                  +
                </Button>
              </div>
            </Form>
          </div>
        </div>
      ))}
      <h2>Total: {cartTotal(cart.cart)}</h2>
      <Link to="/checkout" className="btn btn-primary">
        Checkout
      </Link>
    </div>
  );
}

export default ShoppingCart;
