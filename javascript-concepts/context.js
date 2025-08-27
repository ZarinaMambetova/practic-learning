// context путают с областью вдимости. Контекст определяет как функция была вызвана и связан с this

// ======== Явный
// function logThis() {
//   console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
//
// // ===== Неявный
// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this)
//   }
// }
//
//
// animal.logThis()

function Cat(color) {
  this.color = color
  console.log('This', this)
    ; (() => console.log('Arrow this', this))()
}

new Cat('red')
// стрелочная функция не создает свой собтственный контекст