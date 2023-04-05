let body = document.body;

// Обираємо сайт
let site = prompt(`Оберіть мій улюблений сайт, або введіть свій
1 - Google,
2 - w3schools,
3 - stackoverflow`);
let pLink = document.querySelector('.site');
if (site == 1) {
    pLink.innerHTML = `Мій улюблений сайт: <a href="https://www.google.com.ua/" target="_blank">Google</a> site!`;
} else if (site == 2) {
    pLink.innerHTML = `Мій улюблений сайт: <a href="https://www.w3schools.com/" target="_blank">w3schools</a> site!`;
} else if (site == 3) {
    pLink.innerHTML = `Мій улюблений сайт: <a href="https://ru.stackoverflow.com/" target="_blank">stackoverflow</a> site!`;
} else {
    pLink.innerHTML = `Мій улюблений сайт: <a href="${site}" target="_blank">${site}</a>`;
}


// Фон для сторінки
let ask = +prompt(`Введіть колір фону:
1 - Блакитний, 
2 - Жовтий, 
3 - Зелений`);

if (ask == 1) {
    body.style.backgroundColor = '#B0DAFF';
} else if (ask == 2) {
    body.style.backgroundColor = '#FEFF86';
} else if (ask == 3) {
    body.style.backgroundColor = '#03C988';
} else if (ask !== 1 && ask !== 2 && ask !== 3) {
    alert('Ви обрали невірний номер');
}

// Тип шрифта на сторінці
let font = +prompt(`Введіть тип шрифта 
1 - Arial, 
2 - Times New Roman, 
3 - Georgia`);
if (font == 1) {
    body.style.fontFamily = 'Arial';
} else if (font == 2) {
    body.style.fontFamily = 'Times New Roman';
} else if (font == 3) {
    body.style.fontFamily = 'Georgia';
} else if (font !== 1 && font !== 2 && font !== 3) {
    alert('Ви обрали невірний номер');
}

// Вирівнювання для заголовка h1
let align = +prompt(`Введіть вирівнювання заголовка
1 - З ліва,
2 - По центру, 
3 - З права`);
let h1 = document.querySelector("h1");
if (align == 1) {
    h1.style.textAlign = 'left';
} else if (align == 2) {
    h1.style.textAlign = 'center';
} else if (align == 3) {
    h1.style.textAlign = 'right';
} else if (align !== 1 && align !== 2 && align !== 3) {
    alert('Ви обрали невірний номер');
}

//фон для параграфа з посиланнями
let parBac = +prompt(`Введіть колір фону посилання
1 - Апельсиновий, 
2 - Рожжевий, 
3 - Темно-бордовий`);
let p = document.querySelector('p');
if (parBac == 1) {
    p.style.backgroundColor = '#EBB02D';
} else if (parBac == 2) {
    p.style.backgroundColor = '#D864A9';
} else if (parBac == 3) {
    p.style.backgroundColor = '#D61355';
} else {
    alert('Ви обрали не вірний номер');
};

/*колір тексту у параграфі з посиланнями і 
для самих посилань. При чому колір тексту
 для посилань призначити у циклі*/
let textColor = +prompt(`Введіть колір тексту посилання
1 - Білий, 
2 - Сірий, 
3 - Світло жовтий`);

if (textColor === 1) {
    p.style.color = '#fff';
} else if (textColor === 2) {
    p.style.color = '#393535';
} else if (textColor === 3) {
    p.style.color = '#f8f7bd';
} else {
    alert('Ви обрали не вірний номер');
}

for (let i = 0; i < p.children.length; i++) {
    if (textColor === 1) {
        p.children[i].style.color = '#fff';
    } else if (textColor === 2) {
        p.children[i].style.color = '#393535';
    } else if (textColor === 3) {
        p.children[i].style.color = '#f8f7bd';
    } else {
        alert('Ви обрали не вірний номер');
        break;
    }
}

// колір, розмір, товщину тексту у елементі div
let div = document.querySelector('div');
let textListColor = +prompt(`Введіть колір тексту списка
1 - Былий, 
2 - Сірий, 
3 - Світло жовтий`);
if (textListColor == 1) {
    div.style.color = '#fff';
} else if (textListColor == 2) {
    div.style.color = '#393535';
} else if (textListColor == 3) {
    div.style.color = '#f8f7bd';
} else {
    alert('Ви обрали не вірний номер');
}

let duvSize = +prompt(`Введіть розмір  тексту списка`);
if (duvSize >= 10 && duvSize <= 30) {
    div.style.fontSize = `${duvSize}px`;
} else if (duvSize < 10) {
    div.style.fontSize = `10px`;
} else if (duvSize > 30) {
    div.style.fontSize = `30px`;
}

let weight = +prompt(`Введіть товщину  тексту списка від 100 до 900`);
if (weight >= 100 && weight <= 900) {
    div.style.fontWeight = `${weight}`;
} else if (weight < 100) {
    div.style.fontWeight = `100`;
} else if (weight > 900) {
    div.style.fontWeight = `900`;
}

// тип маркера для маркованого списку на сторінці
let ulStyle = document.querySelector("ul");
let markerType = +prompt(`Введіть тип маркера для маркованого списку
1 - Круг, 
2 - Крапка, 
3 - Квадрат`);

if (markerType === 1) {
    ulStyle.style.listStyle = 'circle';
} else if (markerType === 2) {
    ulStyle.style.listStyle = 'disc';
} else if (markerType === 3) {
    ulStyle.style.listStyle = 'square';
} else {
    alert('Ви ввели неправильний номер. Будь ласка, введіть 1, 2 або 3.');
}
