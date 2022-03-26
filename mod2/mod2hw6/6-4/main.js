let a = +prompt("Введіть ціле чисорл");
let b = +prompt("Введіть ціле чисор");
a = parseInt(a, 10);
b = parseInt(b, 10);
if (a > b) {
    b = a;
    a = b;
};
let askPriNum = function() {
    if (a == 2) {
        a = 2
    } else {
        for (let i = 3; i < a; i++) {
            if (a % i === 0) {
                a -= 1;
                break
            } else {
                let x = a / i;
                a = x * i;
                return a -= 1;

            };
        };
        if (b == 2) {
            b = 2;
        } else {
            for (let i = 3; i < b; i++) {
                if (b % i === 0) {
                    b -= 1;
                    break
                } else {
                    let x = b / i;
                    b = x * i;
                    break

                }
            };
        };
    };
};

let diap = function() {
    let res = '';
    if (a == 2) {
        a += 1;
    };
    for (j = a; j <= b; j += 2) {
        document.write(`<h1> ${j} </h1>`)
    };

};
askPriNum()
diap()