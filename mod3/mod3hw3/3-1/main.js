
let res = function getArea(number) {
    if (number > 0) {
        let sum = Math.PI * (number * number)
        document.write(`<h1>Площа кола =  ${sum.toFixed(2)} см2</h1>`)
    } else if (number <= 0) {
        document.write(`<h1>Будь ласка, введіть радіус! </h1>`)
    } else if (number = isNaN) {
        document.write(`<h1> Повинно бути числове значення </h1>`)
    }

}
res(+prompt("Введіть радіус кола в сантиметрах"))