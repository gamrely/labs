// 1) for
function sumFor(...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s += args[i];
  }
  return s;
}

function sumForOf(...args) {
  let s = 0;
  for (let x of args) {
    s += x;
  }
  return s;
}


function sumWhile(...args) {
  let i = 0;
  let s = 0;
  while (i < args.length) {
    s += args[i];
    i++;
  }
  return s;
}


function sumDoWhile(...args) {
  if (args.length === 0) return 0;

  let i = 0;
  let s = 0;

  do {
    s += args[i];
    i++;
  } while (i < args.length);

  return s;
}


function sumReduce(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}

// Testing the functions
console.log("sumFor =", sumFor(1, 2, 3));         
console.log("sumForOf =", sumForOf(1, 2, 3));     
console.log("sumWhile =", sumWhile(1, 2, 3));     
console.log("sumDoWhile =", sumDoWhile(1, 2, 3)); 
console.log("sumReduce =", sumReduce(1, 2, 3));   