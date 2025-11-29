function seq(firstArg) {
  const funcs = [];

  function chain(arg) {
    if (typeof arg === 'number') {
      let result = arg;

      for (let i = funcs.length - 1; i >= 0; i--) {
        result = funcs[i](result);
      }

      return result;
    }

    if (typeof arg === 'function') {

      funcs.push(arg);
      return chain;
    }
;
  }

  
  return chain(firstArg);
}


console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
); // Результат: 17

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
); // Результат: 24

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
); // Результат: 3