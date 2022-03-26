function maxNum(...arg) {
    let max = arg[0];
    for (let i = 0; i < arg.length; i++) {
        if (max < arg[i]) max = arg[i];
    }
    document.write(`<h1>Максимальне число - ${max}</h1>`)
}
maxNum(1, 2, -5, 12, 60, -55, 5, 10, 12, 4)