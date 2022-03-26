function MyMath() {
    this.a = 11;
    this.b = 2;
    this.x = "";
    this.sum = function() {
        this.x = this.a + this.b;
        return `${this.a} + ${this.b} = ${this.x}`
    }
    this.multiplication = function() {
        this.x = this.a * this.b;
        return `${this.a} * ${this.b} = ${this.x}`
    }
    this.division = function() {
        this.x = this.a / this.b;
        return `${this.a} / ${this.b} = ${this.x}`
    }
    this.subtraction = function() {
        this.x = this.a - this.b;
        return `${this.a} - ${this.b} = ${this.x}`
    }
}
let sum = new MyMath();
document.write(`<h2>${sum.sum()}</h2>`);

let multiplication = new MyMath();
document.write(`<h2>${multiplication.multiplication()}</h2>`);

let division = new MyMath();
document.write(`<h2>${multiplication.division()}</h2>`);

let subtraction = new MyMath();
document.write(`<h2>${multiplication.subtraction()}</h2>`);