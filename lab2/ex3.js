const obj1 = { name: "Illia"}
obj1.name = "Illia"
 
let obj2 = { name: "Pavlo"}
obj2.name = "Pavlo"

console.log(obj1)
console.log(obj2)

function createUser(name, city) {
    return { name: name, city: city }
}

 console.log(createUser("Illia", "Kyiv"))
 