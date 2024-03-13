function calculateTip(amount, rating) {
  let lowerRate = rating.toLowerCase();
  return lowerRate == "terrible"
    ? 0
    : lowerRate == "poor"
    ? Math.ceil((amount / 100) * 5)
    : lowerRate == "good"
    ? Math.ceil((amount / 100) * 10)
    : lowerRate == "great"
    ? Math.ceil((amount / 100) * 15)
    : lowerRate == "excellent"
    ? Math.ceil((amount / 100) * 20)
    : "Rating not recognised";
}
