import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="text-center">
      <h1 className="mb-5">Checkout success!</h1>
      <Link to="/">Browse more products...</Link>
    </div>
  );
}

export default CheckoutSuccess;
