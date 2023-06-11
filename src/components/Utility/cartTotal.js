function cartTotal(data) {
  const initialValue = 0;
  const total = data.reduce((accumulator, current) => accumulator + current.discountedPrice * current.quantity, initialValue);
  return "$" + total.toFixed(2);
}
export default cartTotal;
