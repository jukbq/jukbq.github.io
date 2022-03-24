let ask1 = prompt("Столиця України");
let summ = 0;

if (ask1.toLowerCase() === "київ" || ask1.toLowerCase() === "kyiv") {
    summ++;
};

let ask2 = prompt("Столиця Польші");
if (ask2.toLowerCase() === "варшава" || ask2.toLowerCase() === "Varshava") {
    summ++;
};

let ask3 = prompt("Столиця Німеччини");
if (ask3.toLowerCase() === "берлін" || ask3.toLowerCase() === "berlin") {
    summ++;
};

let ask4 = prompt("Столиця Франції");
if (ask4.toLowerCase() === "париж" || ask4.toLowerCase() === "paris") {
    summ++;
};

let ask5 = prompt("Столиця Італії");
if (ask5.toLowerCase() === "рим" || ask5.toLowerCase() === "roma") {
    summ++;
};

let ask6 = prompt("Столиця Іспанії");
if (ask6.toLowerCase() === "мадрид" || ask6.toLowerCase() === "madrid") {
    summ++;
};

let ask7 = prompt("Столиця Великої Британії");
if (ask7.toLowerCase() === "лондон" || ask7.toLowerCase() === "london") {
    summ++;
};

let ask8 = prompt("Столиця Угорщини");
if (ask8.toLowerCase() === "будапешт" || ask8.toLowerCase() === "budapesht") {
    summ++;
};

let ask9 = prompt("Столиця Австрії");
if (ask9.toLowerCase() === "відень" || ask9.toLowerCase() === "wien") {
    summ++;
};

let ask10 = prompt("Столиця Румунії");
if (ask10.toLowerCase() === "бухарест" || ask10.toLowerCase() === "bucurești") {
    summ++;
};

document.write("Ваш результат" + summ);