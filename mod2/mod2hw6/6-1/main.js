let numb = +prompt("Введыть цыле число");
const fib = (n) => {
    let fibArr = [1, 1]; 
    for (let i = 2; i < n; i++) { 
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    document.write(`<h2>${fibArr.join('  //==//')}<h2>`);
}
fib(numb)

