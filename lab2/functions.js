function average(a, b) {
    return (b + a) / 2;
}
console.log(average(102, 51))

function square(x) {
    return x * x;
}
console.log(square(6577))

function cube(x) {
    return x * x * x;
}
console.log(cube(2))

function calculate() {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        let squar = square(i);
        let averag = average(i, squar);
        let cubed = cube(averag);
        result.push({ i, squar, averag, cubed });
    }
    return result;
}
console.log(calculate());
     

