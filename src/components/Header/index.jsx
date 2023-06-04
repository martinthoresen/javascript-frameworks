import React from "react";
import Navigation from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Header() {
  return (
    <header>
      <Navigation />
    </header>
  );
}

export default Header;
