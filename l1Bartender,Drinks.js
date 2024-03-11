function getDrinkByProfession(param) {
  param = param.toLowerCase();
  if (param == "jabroni") {
    return "Patron Tequila";
  } else if (param == "school counselor") {
    return "Anything with Alcohol";
  } else if (param == "programmer") {
    return "Hipster Craft Beer";
  } else if (param == "bike gang member") {
    return "Moonshine";
  } else if (param == "politician") {
    return "Your tax dollars";
  } else if (param == "rapper") {
    return "Cristal";
  }
  return "Beer";
}
