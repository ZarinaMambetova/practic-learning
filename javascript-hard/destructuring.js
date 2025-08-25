function calcValue(a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b
  ]
}

// const result = calcValue(42, 10)
// const sum = result[0]
// const sub = result[1]
// // Можно так, чтобы не обращаться отдельно в каждому элементу массива:

// const [sum, sub] = result

// Можно сразу так:
const [sum, sub] = calcValue(42, 10)
console.log(sum, sub)
// Если не нужно вычитаение, то пропускаем его в массиве. Тогда вычитание будет игнорироваться и следующим будет умножение
// ...other добавляем rest, чтобы посчиталось всё остальное после умножения

const [sum, , mult, ...other] = calcValue(42, 10)
console.log(sum, mult, other)

// Можно поставить значение по умолчанию. Если в функции на второй строке не будет ничего (undefind), то выведится значение по умолчанию
const [sum, sub = 'Вычитания нет', mult, ...other] = calcValue(42, 10)

// Object
const person = {
  name: 'Maxim',
  age: 25,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
}

// const name = person.name и так далее по очереди, но можно так
const { name, age } = person

// Можно переопределить имя свойства:
const { name: firstname, age } = person

// Можно добавить новое свойство:
const { name, age, car = 'Машины нет' } = person

// Значение по умолчанию
const { name = 'Без имени', age } = person

// Для адреса проваливаемся в этот объект
const { name, age, adress: { city } } = person

// Используем rest, в нем будет всё остальное
const { name, ...info } = person

// Применение:
function logPerson({ name, age }) {
  console.log(name + ' ' + age)
}

logPerson(person)