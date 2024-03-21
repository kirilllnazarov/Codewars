var nextFiveDays = function (date) {
  var day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    dates = [];

  for (var i = 1; i <= 5; i++) {
    dates.push(new Date(year, month, day + i).toLocaleDateString("en-GB"));
  }

  return dates.join(", ");
};
