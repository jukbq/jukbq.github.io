function MyMath() {
    //-------1------
    this.Pi = '3.14159265358979323846264'
    document.write(`<h1>${this.Pi}</h1>`)

    //-------2--------

    this.pow = function pow() {
        let number = +prompt('Введіть число')
        let degree = +prompt('Введіть степінь')
        let a = new Number(number);
        let b = new Number(degree);
        let result = a;
        for (let i = 1; i < b; i++) {
            result *= a;
        }
        if (result == 0) {
            return ('Будь ласка, введіть число!')
        }
        return result;

    }
    document.write(`<h1>${pow()}</h1>`)

    //---------3---------    
    this.abs = function abs() {
        let number = +prompt('Введіть число')
        if (number == 0) {
            return ('Будь ласка, введіть число!')
        }
        number = 15 % 7
        return number
    }
    document.write(`<h1>${this.abs()}</h1>`)



    //---------4----------
    this.max = function maxNum() {
        let arg = [1, 2, -5, 12, 6660, -55, 5, 10, 12, 4];
        let max = arg[0];
        for (let i = 0; i < arg.length; i++) {
            if (max < arg[i]) max = arg[i];
        }
        return max
    }
    document.write(`<h1>${max()}</h1>`)


    //-------5----------

    this.min = function minNum() {
        let arg = [1, 2, -5, 12, 6660, -55, -1098, 5, 10, 12, 4];
        let min = arg[0];
        for (let i = 0; i < arg.length; i++) {
            if (min > arg[i]) min = arg[i];
        }
        return min
    }
    document.write(`<h1>${min()}</h1>`)



}

MyMath()