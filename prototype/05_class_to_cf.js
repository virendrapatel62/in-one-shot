const RectanglePrototype = {
  area() {
    return this.length * this.width;
  },

  perimeter() {
    return 2 * (this.length + this.width);
  },

  isSquare() {
    return this.length === this.width;
  },

  displayDimensions() {
    console.log(`Length: ${this.length}, Width: ${this.width}`);
  },
};

function Rectangle(length, width) {
  this.length = length; // property for length
  this.width = width; // property for width
}

Object.assign(Rectangle.prototype, RectanglePrototype);

// Rectangle.prototype.area = function () {
//   return this.length * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.length + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.length === this.width;
// };

// Rectangle.prototype.displayDimensions = function () {
//   console.log(`Length: ${this.length}, Width: ${this.width}`);
// };

// 200
// 20 Length: 10, Width: 20
// false
// 60

const r1 = new Rectangle(10, 20);
console.log(r1.area());
r1.displayDimensions();
console.log(r1.isSquare());
console.log(r1.perimeter());
