// Question 2 - Create a function mutliplyByTwo(nums) that 
//              multiplies all numeric property values of nums by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums",
};

mutliplyByTwo(nums);

function mutliplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
};

console.log("nums---->", nums);
