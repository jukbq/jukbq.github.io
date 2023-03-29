let person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';

person.showData = function () {
    document.write(`<h2> Ім'я: ${this.firstName}</h2><h2>Прізвище: ${this.secondName}</h2>`);
    console.log(this.firstName + ', ' + this.secondName);
}

let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();
