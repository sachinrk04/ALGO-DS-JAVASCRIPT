function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

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

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log("person prototype --->", person)

function GoldFish() {

}

mixin(GoldFish.prototype, canEat, canSwim);
const fish = new GoldFish();
console.log("fish-->", fish)
