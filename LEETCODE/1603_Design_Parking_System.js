class ParkingSystem {
    constructor(big, medium, small) {
      this.spaces = [null, big, medium, small];
    }
}

ParkingSystem.prototype.addCar = function (carType) {
    if (this.spaces[carType] > 0) {
        this.spaces[carType]--;
        return true;
    } else {
        return false;
    }
};

let obj = new ParkingSystem(1, 1, 0);

console.log("1--->", obj.addCar(1));
console.log("2--->", obj.addCar(2));
console.log("3--->", obj.addCar(3));
console.log("1--->", obj.addCar(1));
