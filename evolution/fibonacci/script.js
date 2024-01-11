function fibRec(n) {
  if (n < 2) {
    return n;
  }

  return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibRec(6));

function fibGenerator(n) {
  const first = [0, 1];
  for (let i = 2; i < n; i++) {
    first[i] = first[i - 1] + first[i - 2];
  }

  return first;
}

console.log(fibGenerator(7));
