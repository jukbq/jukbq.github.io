let body = document.body;

// фон для сторінки
let ask = +prompt(`Введіть колір фону:
1 - Лісний вовк, 
2 - Синьо-сіра Крайола, 
3 - Світло синьовато-зелений`);

if (ask == 1) {
    body.style.backgroundColor = '#e4dbd9';
} else if (ask == 2) {
    body.style.backgroundColor = '#6e93d6';
} else if (ask == 3) {
    body.style.backgroundColor = '#63a583';
} else if (ask !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};

//тип шрифта на сторінці
let font = +prompt(`Введіть тип шрифта 
1 - Arial, 
2 - Gill, 
3 - Bradley Hand`);
if (font == 1) {
    body.style.fontFamily = 'arial';
} else if (font == 2) {
    body.style.fontFamily = 'Times';
} else if (font == 3) {
    body.style.fontFamily = 'Georgia';
} else if (font !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};

//вирівнювання для заголовка h1
let align = +prompt(`Введіть вирівнювання заголовка
1 - Ліво,
2 - По центру, 
3 - Вправоі`);
let h1 = document.querySelector("h1");
if (align == 1) {
    h1.style.textAlign = 'left'
} else if (align == 2) {
    h1.style.textAlign = 'center';
} else if (align == 3) {
    h1.style.textAlign = 'right';
} else if (align !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};

//фон для параграфа з посиланнями
let parBac = +prompt(`Введіть колір фону посилання
1 - Рожево-ліловий Крайола, 
2 - Сира охра, 
3 - Блідо-кармін`);
let p = document.querySelector('p');
if (parBac == 1) {
    p.style.backgroundColor = '#f2b0a5';
} else if (parBac == 2) {
    p.style.backgroundColor = '#d57056';
} else if (parBac == 3) {
    p.style.backgroundColor = '#b33a3a';
} else if (parBac !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};

/*колір тексту у параграфі з посиланнями і 
для самих посилань. При чому колір тексту
 для посилань призначити у циклі*/

let textColor = +prompt(`Введіть колір тексту посилання
1 - Темний індиго, 
2 - Темний пурпурно-синій, 
3 - Аспидно-сірий`);

if (textColor == 1) {
    p.style.color = '#24012f';
} else if (textColor == 2) {
    p.style.color = '#331a38';
} else if (textColor == 3) {
    p.style.color = '#2f4c58';
} else if (textColor !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};
for (let i = 0; i < p.children.length; i++) {
    if (textColor == 1) {
        p.children[i].style.color = '#24012f';
    } else if (textColor == 2) {
        p.children[i].style.color = '#331a38';
    } else if (textColor == 3) {
        p.children[i].style.color = '#2f4c58';
    } else if (textColor !== 1, 2, 3) {
        alert('Ви обрали не вірний номер');
    };

};
// колір, розмір, товщину тексту у елементі div
let div = document.querySelector('div')
let textListColor = +prompt(`Введіть колір тексту списка
1 - Темний індиго, 
2 - Темний пурпурно-синій, 
3 - Аспидно-сірий`);
if (textListColor == 1) {
    div.style.color = '#24012f';
} else if (textListColor == 2) {
    div.style.color = '#331a38';
} else if (textListColor == 3) {
    div.style.color = '#2f4c58';
} else if (textListColor !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};
let duvSize = +prompt(`Введіть розмір  тексту списка`);
let x = "";

if (duvSize >= 10 && duvSize <= 30) {
    x = duvSize;
} else if (duvSize < 10) {
    for (let i = 0; i <= 10; i++) {
        x = i;
    };
} else if (duvSize > 30) {
    for (let j = duvSize; j >= 30; j--) {
        x = j;
    };

};
div.style.fontSize = `${x}px`;

let weight = +prompt(`Введіть товщину  тексту списка від 100 до 900`);
let y = "";
if (weight >= 100 && weight <= 900) {
    y = weight;
} else if (weight < 100) {
    for (let i = 0; i <= 100; i++) {
        y = i;
    };
} else if (weight > 900) {
    for (let j = weight; j >= 900; j--) {
        y = j;
    };

};

div.style.fontWeight = `${y}`;

// тип маркера для маркованого списку на сторінці

let ulStile = document.querySelector("ul");
let mark = +prompt(`Введіть стиль списка
1 - Круг, 
2 - Крапка, 
3 - Квадрат`);
if (mark == 1) {
    ulStile.style.listStyle = 'circle';
} else if (mark == 2) {
    ulStile.style.listStyle = 'disc';
} else if (mark == 3) {
    ulStile.style.listStyle = 'square';
} else if (mark !== 1, 2, 3) {
    alert('Ви обрали не вірний номер');
};

console.log(y)
console.log(x)