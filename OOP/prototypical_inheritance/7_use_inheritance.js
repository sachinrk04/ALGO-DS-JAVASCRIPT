const canEat = {
    eat: function() {
        this.hunger--;
        console.log("eating");
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

function Person() {

}

// const person = Object.assign({}, canEat, canWalk);
// console.log("person-->", person) // person


Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log("person prototype --->", person)

function GoldFish() {

}

Object.assign(GoldFish.prototype, canEat, canSwim);
const fish = new GoldFish();
console.log("fish-->", fish)
