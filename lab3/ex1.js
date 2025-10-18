function random(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max));
}

const randomn = random(0, 1000);
console.log(randomn)