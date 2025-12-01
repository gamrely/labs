function checkType(value, Type) {
  if (Type === Number)  return typeof value === 'number';
  if (Type === String)  return typeof value === 'string';
  if (Type === Boolean) return typeof value === 'boolean';
  return value instanceof Type;
}

function contract(fn, ...types) {
  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];

  return function (...args) {
    if (args.length !== argTypes.length) {
      throw new TypeError("Incorrect number of arguments");
    }

    for (let i = 0; i < argTypes.length; i++) {
      if (!checkType(args[i], argTypes[i])) {
        throw new TypeError(
          `expected type ${argTypes[i].name} for argument #${i + 1}`
        );
      }
    }

    const result = fn.apply(this, args);

    if (!checkType(result, returnType)) {
      throw new TypeError(
        `Waiting ${returnType.name} for result`
      );
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (a, b) => a + b;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings("Hello ", "world!")); 
