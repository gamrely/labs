function max(matrix) {
  let m = matrix[0][0];

  for (let row of matrix) {
    for (let value of row) {
      if (value > m) {
        m = value;
      }
    }
  }

  return m;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log("max =", m); 