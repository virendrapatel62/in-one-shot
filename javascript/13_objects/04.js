console.log("class practice");

class Car {
  color;
  brand;
  constructor(color, brand) {
    console.log("Creating car object with color", color, "and brand", brand);
    this.color = color;
    this.brand = brand;
  }

  start() {
    console.log(this.brand, "is Starting");
  }
  stop() {
    console.log(this.brand, "is stoping");
  }
}

const car1 = new Car("while", "A");
const car2 = new Car("black", "B");

car1.start();
car2.start();

car1.stop();
car2.stop();
