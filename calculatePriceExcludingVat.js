function excludingVatPrice(price) {
  return price == null ? -1 : +(price - (price / 115) * 15).toFixed(2);
}
