function cartTotal(data) {
  const initialValue = 0;
  const total = data.reduce((accumulator, current) => accumulator + current.discountedPrice * current.quantity, initialValue);
  return total;
}
export default cartTotal;
