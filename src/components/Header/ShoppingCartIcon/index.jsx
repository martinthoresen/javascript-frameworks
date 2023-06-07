import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { Link } from "react-router-dom";

function ShoppingCartIcon() {
  return (
    <Link to="/cart" className="btn btn-dark">
      <FontAwesomeIcon icon={icon({ name: "cart-shopping" })} />
    </Link>
  );
}

export default ShoppingCartIcon;
