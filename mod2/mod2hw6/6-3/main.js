//Завдання 6-3
const simpleNumber = function (start, end) {
    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            primeNumbers.push(i);
            console.log(i);
        }
    }
    document.write(`<h2>${primeNumbers.join(', ')}</h2>`);
}

simpleNumber(+prompt("Введіть початкове число"), +prompt("Введіть кінцеве число"));
