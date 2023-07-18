function numRescueBoats(people, limit) {
    people.sort((a, b) => b - a);

    let left = 0;
    let rigth = people.length - 1;
    let numBoats = 0;

    while (left <= rigth) {
        if (people[left] + people[rigth] <= limit) {
            rigth--;
        };
        left++;
        numBoats++;
    }

    return numBoats;
};

const people = [3, 2, 2, 1];
const limit = 3;

console.log(numRescueBoats(people, limit));