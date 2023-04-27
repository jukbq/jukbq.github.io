// завдання 1
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Іван', 'Васильченко', 500, 22);
const worker2 = new Worker('Петро', 'Федорійченко', 700, 24);

document.write(`<h2>Ім'я: ${worker1.firstName}</h2>
<h2>Прізвище: ${worker1.secondName}</h2>
<h2>Плата в день: ${worker1.rate}</h2>
<h2>Робочих днів: ${worker1.days}</h2>
<h2>Зарплата: ${worker1.getSalary()}</h2>`);

document.write(`<h2>Ім'я: ${worker2.firstName}</h2>
<h2>Прізвище: ${worker2.secondName}</h2>
<h2>Плата в день: ${worker2.rate}</h2>
<h2>Робочих днів: ${worker2.days}</h2>
<h2>Зарплата: ${worker2.getSalary()}</h2>`);

//завдання 2
class MyString {
    reverse(word) {
        return word.split("").reverse().join("");
    }
    ucFirst(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    ucWords(word) {
        return word
            .toLowerCase()
            .split(" ")
            .map(function (word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(" ");
    }
}

let str = new MyString();

document.write(`<h2> *********************************** </h2>`);
document.write(`<h2>  ${str.reverse("IVAN")} </h2>`);
document.write(`<h2>${str.ucFirst("arsenal")} </h2>`);
document.write(`<h2>  ${str.ucWords("arsenal arsenal arsenal")} </h2>`);


//Завдання 3

document.write(`<h2> *********************************** </h2>`);
class CoffeeMake {
    on() {
        document.write(`<h2>Розботу розпочато</h2>`);
    }

    off() {
        document.write(`<h2>Роботу завершено</h2>`);
        document.write(`<h2> ************** </h2>`);
      
    }
}

class DripCoffeeMaker extends CoffeeMake {
    brew() {
        document.write(`<h2>Капельна кавоварка готує каву</h2>`);
    
    }
}

class EspressoMachine extends CoffeeMake {
    brew() {
        document.write(`<h2>Ріжкова кавоварка готує каву</h2>`);
       
    }
}

class CarobCoffeeMaker extends CoffeeMake {
    brew() {
        document.write(`<h2>Кавомашинаготує каву</h2>`);
      
    }
}
function typeСoffeeMaker(type){
    const myCoffeeMaker = new type();
    myCoffeeMaker.on();
    myCoffeeMaker.brew();
    myCoffeeMaker.off();
}

typeСoffeeMaker(DripCoffeeMaker)
typeСoffeeMaker(EspressoMachine)
typeСoffeeMaker(CarobCoffeeMaker)
