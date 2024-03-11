function calculateAge(birdh, year) {
  if (year > birdh) {
    if (year - birdh === 1) {
      return `You are ${year - birdh} year old.`;
    } else if (year - birdh > 1) {
      return `You are ${year - birdh} years old.`;
    }
  } else if (year < birdh) {
    if (birdh - year === 1) {
      return `You will be born in ${birdh - year} year.`;
    } else if (birdh - year > 1) {
      return `You will be born in ${birdh - year} years.`;
    }
  } else if (year === birdh) {
    return `You were born this very year!`;
  }
}
