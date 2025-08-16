const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function () {
    console.log('Greet!')
  }
})

// __proto__  - это свойство, которое является ссылкой на прототип объекта. 
// Object - это название родительского класса для этого объекта
// всё, что создается в js это объекты

// Если добавить функцию в Object, то она будет доступна и в person, так как это родительских объект
Object.prototype.sayHello = function () {
  console.log('Hello')
}

const lena = Object.create(person)
// данные из person будет в __proto__ lenы.
lena.name = 'Elena'
// Выведет Елена так как вызов проихозит первого попавшегося свойства. Если на первом уровне не нашелся,
// то ищет уже на втором уровне -  в proto


//объект string
const str = "string"
// тоже самое что:
const str = new String("string"}
// поэтому у него будут доступны функции этого класса

