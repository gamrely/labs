const contakti = [
    { name: "Illia", number: "+380996248863" },
    { name: "Vlad", number: "+380975325555" },
    { name: "Anna", number: "+380665554789" }
];

function findPhoneByName(name) {
    for (const people of contakti) {
        if (people.name === name) {
            return people.number;
        }
    }
    return "No number found";
}
console.log(findPhoneByName("Illia"));
console.log(findPhoneByName("Vladik"));

const hash = {
    "Illia": "+380996248863",
    "Vlad": "+380975325555",
    "Anna": "+380665554789"
}
function findPhoneByNameHash(name) {
    return hash[name];
}
console.log(findPhoneByNameHash("Illia"));
console.log(findPhoneByNameHash("Vladik"));
