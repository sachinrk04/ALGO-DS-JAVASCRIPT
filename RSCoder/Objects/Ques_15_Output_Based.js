// Output ?

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: "Sachin",
        age: 24,
    };

    return person;
};

const personObj1 = {
    name: "Ram",
    age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log("personObj1---->", personObj1) // {name: 'Ram', age: 25}
console.log("personObj2---->", personObj2) // {name: 'Sachin', age: 24}