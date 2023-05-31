function percentageSale(price, discountedPrice) {
  return Math.round(((discountedPrice - price) / discountedPrice) * -100) + " % Sale";
}

export default percentageSale;
