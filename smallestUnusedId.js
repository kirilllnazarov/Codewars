function nextId(ids) {
  let lowestId = 0;
  let sortedIds = ids.sort((a, b) => a - b);
  for (let i = 0; i < sortedIds.length; i++) {
    if (lowestId === sortedIds[i] && lowestId !== sortedIds[i + 1]) {
      lowestId++;
    } else if (lowestId !== sortedIds[i + 1]) {
      continue;
    }
  }
  return lowestId;
}
