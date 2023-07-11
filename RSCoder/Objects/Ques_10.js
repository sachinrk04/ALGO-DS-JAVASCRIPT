// Output ?

function getItems(fruitList, favoriteFruit, ...args) {
    return [...fruitList, ...args, favoriteFruit];
}

let res = getItems(["banana", "Apple"], "Pear", "Orange");

console.log("getItems---->", res) // ['banana', 'Apple', 'Orange', 'Pear']