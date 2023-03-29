let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;

MyMath.sum = function () {
    document.write(`<h2>${this.a + this.b}</h2>`);
    console.log(this.a + this.b);
}

MyMath.multiplication = function () {
    document.write(`<h2>${this.a * this.b}</h2>`);
    console.log(this.a * this.b);
}

MyMath.division = function () {
    document.write(`<h2>${this.a / this.b}</h2>`);
    console.log(this.a / this.b);
}

MyMath.subtraction = function () {
    document.write(`<h2>${this.a - this.b}</h2>`);
    console.log(this.a - this.b);
}

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();