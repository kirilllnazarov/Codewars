function whatday(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (num < 1 || num > 7) {
    return "Wrong, please enter a number between 1 and 7";
  }
  return days[num - 1];
}
