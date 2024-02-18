function areYouPlayingBanjo(name) {
    let lowerName = name.toLowerCase();
    if (lowerName[0] === 'r') {
      return `${name} ${'plays banjo'}`
    }
    return `${name} ${'does not play banjo'}`;
  }

  console.log(areYouPlayingBanjo('Ross'));