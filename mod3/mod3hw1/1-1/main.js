let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showData: function() {
        document.write(
            `<h2> Ім\'я:  ${this.firstName}</h2>   <h2>Прізвише:  ${this.secondName},</h2> `)
    }
}
let newPerson = Object.assign({}, person)
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();