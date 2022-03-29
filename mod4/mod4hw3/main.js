function CoffeeMake(type) {
    this.type = type;
    this.turnOn = 'Початок роботи';
    this.turnOff = 'Кава готова ';


}
CoffeeMake.prototype.on = function() {
    document.write(`<h1> ${this.type},  ${this.turnOn} </h1>`)

}
CoffeeMake.prototype.off = function() {
        document.write(`<h1> ${this.turnOff } </h1>`)

    }
    /*-------------------------Drip------------------------------------*/

function Drip(type, turnOn) {
    CoffeeMake.call(this, type, turnOn);
    this.heat = 'Нагрів води';
    this.steaming = 'Запарювання кави';
    this.innings = 'Подача кави';
    this.heating = 'Підігрів кави'
}
Drip.prototype = Object.create(CoffeeMake.prototype);
Drip.prototype.constuctor = Drip;

Drip.prototype.work = function() {
    console.log(`
    ${this.heat},
    ${this.steaming}, 
    ${this.innings}, 
    ${this.heating}`);
}

let drip = new Drip('Крапельна')

drip.on()
drip.work()
drip.off()


/*-------------------------Holder------------------------------------*/

function Holder(type, turnOn, ) {
    CoffeeMake.call(this, type, turnOn);
    this.compressedness = 'Первырка спресованості';
    this.heat = 'Нагрів води';
    this.steaming = 'Запарювання кави';
    this.innings = 'Подача кави';
    this.inningMilk = 'Подача молока';
    this.heating = 'Підігрів кави'
}
Holder.prototype = Object.create(CoffeeMake.prototype);
Holder.prototype.constuctor = Holder;

Holder.prototype.work = function() {
    console.log(`
    ${this.compressedness},
    ${this.heat},
    ${this.steaming}, 
    ${this.innings}, 
    ${this.inningMilk}, 
    ${this.heating}`);
}

let holder = new Holder('Ріжкова')

holder.on()
holder.work()
holder.off()

/*-------------------------Cofeem-----------------------------------*/

function Cofeem(type, turnOn) {
    CoffeeMake.call(this, type, turnOn);
    this.grind = 'Помол зерен кави';
    this.grindSize = 'Розмір помолу зерен';
    this.strength = 'Обрати міцність кави';
    this.heat = 'Нагрів води';
    this.steaming = 'Запарювання кави';
    this.innings = 'Подача кави';
    this.inningMilk = 'Подача молока';
    this.heating = 'Підігрів кави'
}
Cofeem.prototype = Object.create(CoffeeMake.prototype);
Cofeem.prototype.constuctor = Cofeem;

Cofeem.prototype.work = function() {
    console.log(`
    ${this.grind},
    ${this.grindSize},
    ${this.strength},
    ${this.heat},
    ${this.steaming}, 
    ${this.innings}, 
    ${this.inningMilk}, 
    ${this.heating}`);
}

let cofeem = new Cofeem('Каво-машин')

cofeem.on()
cofeem.work()
cofeem.off()