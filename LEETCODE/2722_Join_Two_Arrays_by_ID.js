function mergeArrays(arr1, arr2) {
    const map = new Map();

    // Merge objects from arr1
    for (const obj of arr1) {
        const idValue = obj.id;
        if (!map.has(idValue)) {
            map.set(idValue, obj);
        }
    };

    // Merge objects from arr2
    for (const obj of arr2) {
        const idValue = obj.id;
        if (!map.has(idValue)) {
            map.set(idValue, obj);
        } else {
            const mergedObj = map.get(idValue);
            Object.assign(mergedObj, obj); // // Update with values from arr2
        }
    };

    const result = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return result;
}

const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
const arr2 = [
    {"id": 3, "x": 5}
];

const output = mergeArrays(arr1, arr2);
console.log("output---->", output);

// output---->

// [
//     { "id": 1, "x": 1 },
//     { "id": 2, "x": 9 },
//     { "id": 3, "x": 5 }
// ]