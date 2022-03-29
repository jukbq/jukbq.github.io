class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;

    }
    getSalary() {
        return this.rate * this.days
    }

}

const worker1 = new Worker('Василь', 'Пупкін', 500, 22);
document.write(`<h2> Ім\`я: ${worker1.firstName} </h2>`)
document.write(`<h2> Поізвище: ${worker1.secondName} </h2>`)
document.write(`<h2> Плата в день: ${worker1.rate} </h2>`)
document.write(`<h2> Робочих днів: ${worker1.days} </h2>`)
document.write(`<h2> Зарплата ${worker1.getSalary()} </h2>`)


/*----------------------------------------------*/

class MyString {


    reverse(word) {
        return word.split("").reverse().join("")
    }
    ucFirst(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    ucWords(word) {
        return word.toLowerCase().split(' ').map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
    }

}

let str = new MyString()

document.write(`<h2> *********************************** </h2>`)
document.write(`<h2>  ${str.reverse('IVAN')} </h2>`)
document.write(`<h2>${str.ucFirst('arsenal')} </h2>`)
document.write(`<h2>  ${str.ucFucWordsirst('arsenal arsenal arsenal')} </h2>`)