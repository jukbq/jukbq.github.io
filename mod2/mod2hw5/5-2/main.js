let num = +prompt("Введіть ціле чисор");
num = parseInt(num, 10);

function priNum() {
    let res = ''
    if (num == 2) {
        res = `${num} -  Прсте число`
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            res = `${num} -  Число не є простим`
            break
        }
        res = `${num} -  Прсте число`
    };
    document.write(`<h2>${res}</h2>`)
    console.log(`<h2>${res}</h2>`)
};


priNum();