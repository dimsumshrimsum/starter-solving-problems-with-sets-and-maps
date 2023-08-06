function intersection(a, b) {
  const m1 = new Map();
  const s1 = new Set();

  for (let e of a) {
    m1.set(e, e);
  }
  for (let e of b) {
    if (m1.get(e)) {
      s1.add(e);
    }
  }
  return [...s1];
}

module.exports = intersection;
