function defineSuit(card) {
  return card[card.length - 1] === "♣"
    ? "clubs"
    : card[card.length - 1] === "♦"
    ? "diamonds"
    : card[card.length - 1] === "♥"
    ? "hearts"
    : "spades";
}

//second solution
function defineSuit(card) {
  if (card.includes("♣")) return "clubs";
  if (card.includes("♠")) return "spades";
  if (card.includes("♥")) return "hearts";
  if (card.includes("♦")) return "diamonds";
}
