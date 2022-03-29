import { myBalance, stockBalance, sale, total } from './warehouse.js';

console.log(myBalance());
console.log(stockBalance());
console.log(sale('beer', '1'));
console.log(sale('wine', '1'));
console.log(sale('pepsi', '1'));
console.log(total());
console.log(stockBalance());
console.log(myBalance());

console.log(myBalance());
console.log(stockBalance());
console.log(sale('beer', '5'));
console.log(sale('wine', '12'));
console.log(sale('pepsi', '18'));
console.log(total());
console.log(stockBalance());
console.log(myBalance());