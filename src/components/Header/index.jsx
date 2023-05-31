import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Header() {
  return (
    <header>
      <Nav />
      <FontAwesomeIcon icon={icon({ name: "cart-shopping" })} />
    </header>
  );
}

export default Header;
