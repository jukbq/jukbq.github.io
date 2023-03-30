let res = function getSqrt(number) {
    if (number > 0) {
        let sum = Math.sqrt(number)
        document.write(`<h1>Квадратний корінь з ${number.toFixed(2)} = ${sum.toFixed(2)}</h1>`)
    } else if (number < 0) {
        document.write(`<h1>Введіть додатнє число</h1>`)
    } else if (number == 0) {
        document.write(`<h1>Будь ласка, введіть число!<h1>`)
    } else if (number = isNaN()) {
        document.write(`<h1>Повинно бути числове значення<h1>`)
    }


}
res(+prompt("Введіть число для визначення квадратного кореня"));