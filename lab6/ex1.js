"use strict";

const pipe = (...fns) => {
  
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('arguments must be functions');
    }
  }


  return x => {
    let result = x;

    for (const fn of fns) {
      result = fn(result);
    }

    return result;
  };
};


const inc   = x => ++x;
const twice = x => x * 2;
const cube  = x => x ** 3;



const f1 = pipe(inc, twice, cube);
const x1 = f1(5); 
console.log('pipe(inc, twice, cube)(5) =', x1);

const f2 = pipe(inc, inc);
const x2 = f2(7); 
console.log('pipe(inc, inc)(7) =', x2);
