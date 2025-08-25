// 7 типов данных
// null, boolean, number, string, undefined, object, symbol
// symbol - появился в синтаксисе ES6
// object - единственный не примитивный тип данных

console.log(typeof 0) // number
console.log(typeof true) // boolean
console.log(typeof 'JS') // string
console.log(typeof undefined) // undefined
console.log(typeof Math) // object
console.log(typeof Symbol('JS')) // symbol
console.log(typeof null) // получим object, но это null

console.log(typeof function () { }) // получим function , но это object
console.log(typeof NaN) // получим number, но это отдельная сущность  not a number

// falsy-значения: undefind, null, 0, '', NaN, false