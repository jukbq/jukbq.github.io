function MyMath() {
    //-------1------
    this.Pi = '3.14159265358979323846264';
    document.write(`<h1>${this.Pi}</h1>`);

    //-------2--------
    this.pow = function (number, degree) {
        if (typeof number !== 'number' || typeof degree !== 'number') {
            return 'Повинно бути числове значення.';
        }

        let result = 1;
        for (let i = 0; i < degree; i++) {
            result *= number;
        }

        return result;
    };

    const number = +prompt('Введіть число');
    const degree = +prompt('Введіть степінь');
    document.write(`<h1>${this.pow(number, degree)}</h1>`);

    //---------3---------    
    this.abs = function (number) {
        if (typeof number !== 'number') {
            return ('Будь ласка, введіть число!');
        }
        if (number >= 0) {
            return number;
        } else {
            return -number;
        }
    };

    const absNumber = +prompt('Введіть число');
    document.write(`<h1>${this.abs(absNumber)}</h1>`);

    //---------4----------
    this.max = function (arr) {
        let numArr = [];
        for (let num of arr) {
            if (isNaN(num)) {
                return 'Повинно бути числове значення.';
            }
            numArr.push(Number(num));
        }
        return Math.max(...numArr);
    };

    const maxNumbers = prompt("Введіть числа через кому, з яких треба знайти максимальне:").split(",");
    document.write(`<h1>${this.max(maxNumbers)}</h1>`);

    //-------5----------
    this.min = function (arr) {
        let numArr = [];
        for (let num of arr) {
            if (isNaN(num)) {
                return 'Повинно бути числове значення.';
            }
            numArr.push(Number(num));
        }
        return Math.min(...numArr);
    };

    const minNumbers = prompt("Введіть числа через кому, з яких треба знайти мінімальне:").split(",");
    document.write(`<h1>${this.min(minNumbers)}</h1>`);
}

const math = new MyMath();
