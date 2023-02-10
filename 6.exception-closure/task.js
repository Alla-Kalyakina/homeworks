function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
      }
      return Number.parseFloat(value);
}
function validateCount(value) {
    try {
       return parseCount(value);
    } catch(error) {
       return error;
    }
}

class Triangle {
    constructor (oneSide, secondSide, thirdSide) {
        if(oneSide + secondSide < thirdSide || oneSide + thirdSide < secondSide || secondSide + thirdSide < oneSide)
            throw new Error("Треугольник с такими сторонами не существует");
        this.oneSide = oneSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
    get perimeter() {
        return this.oneSide + this.secondSide + this.thirdSide;
    }
    get area() {
        return Math.sqrt(0.5*this.perimeter*(0.5*this.perimeter - this.oneSide)*(0.5*this.perimeter - this.secondSide)*(0.5*this.perimeter - this.thirdSide)).toFixed(3);
    }
}
const error = 0;

function getTriangle(oneSide, secondSide, thirdSide) {
    try {
        let newTriangle = new Triangle(oneSide, secondSide, thirdSide);
        return newTriangle;
    }
    catch {
         let obj = {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
        return obj;
    }
}