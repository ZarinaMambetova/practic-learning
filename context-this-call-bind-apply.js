function hello() {
  console.log('hello', this)
}

// Выведет window. 
// this  указывает на  тот объект, в котором было вызвано. Если вызывать внутри какого-то конкретного объекта, то выведет его.
// Например
const person = {
  name: 'Maxim',
  age: 25,
  sayHello: hello
}
// Тут выведет в this - объект person, его содержимое

// Если нужно вывести внутри объекта window, то нужно использовать команду bind и указывать в параметре, что ожидаешь

const person = {
  name: 'Maxim',
  age: 25,
  sayHello: hello.bind(this или window),
  logInfo: function () {
    console.log(this.name)
  }
}
// выведет Максим

const lena = {
  name: 'Elena',
  age: 25
}
person.logLnfo.bind(lena)()
//Вторые скобки обязательно, иначе не сработает. И выведет сейчас данные Лены

// Можно передавать параметры в функцию:
const person = {
  name: 'Maxim',
  age: 25,

  logInfo: function (job, phone) {
    console.log(this.name),
      console.log(job, phone)
  }
}
person.logInfo.bind(lena, 'jod', 'number')()

// Но передавать свойдства удобнее через методы call и applay. Тогда функция вызывается сразу и не нужны еще одни скобки для вызова функции
person.logInfo.call(lena, 'jod', 'number')

// Если использовать applay, то вторым параметром должен быть массив

person.logInfo.call(lena, ['jod', 'number'])