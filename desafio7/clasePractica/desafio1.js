import moment from "moment";

let currentDateTime = moment(); //fecha y hora actual
let birthday = moment("1996-10-23");



console.log(`Hoy es ${currentDateTime.format('DD/MM/YYYY')}`); 
console.log(`Nací el ${birthday.format('DD/MM/YYYY')}`);
console.log(`Desde que nací han pasado ${currentDateTime.diff(birthday,'days')} días`);
console.log(`Desde que nací han pasado ${currentDateTime.diff(birthday,'years')} años`)
