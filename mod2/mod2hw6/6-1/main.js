let fib = n => {
    let a = 0,
        b = 1;
    for (let i = 0; i < n; i++) {
        let c = b;
        b = a + b;
        a = c;
        document.write(`<h3>${c}<h3>`);
    };
};
fib(10);