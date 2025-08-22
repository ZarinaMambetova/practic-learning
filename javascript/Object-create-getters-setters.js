// create - создает новый объект, но не обычным способом. Значение указываем через value
// В параметру передаем два объекта. Первые {} - для прототипа, можно прописать методы. Во вторых пишем поля. Значения в value обязательно

//    enumerable: true, - Значения value не видно из этих полей, нельзя пройти циклом. Если тут true, то увидеть значения и работать с ними можно
//    writable: true, - можно редактировать поля
//    configurable: true - можно удалять поля

const person = Object.create({
  calcAge() {
    console.log(new Date().getFullYear() - this.birthday)
  }
}, {
  name: {
    value: 'Msxim',
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthday: {
    value: 1984,
    enumerable: true
  },
  age: {
    get() {
      new Date().getFullYear() - this.birthday
    },
    set(value) {
      console.log(value);
      document.body.style.background = 'red'
    }
  }
})
// person.name = 'Alex' - меняем
// console.log(person)
// delete person.name - удаляем

// к полю person.age можно обращаться как к объекту и будлем получать результат работы функций
// get - обязательно что-то возвращает return. Обращаетмся к полю и получаем результат
//  в поле set можно передавать значение из get и что-то с ним делать, отслеживать изменения как вотчер.
//  И вообще прописать какую-то логику, например задавать стили экрана


for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key', key, person[key])
  }
}
//Если пропускать в цикле ключи person, то в него будут входить и значения из прототипов. 
// Чтобы этого не было, нужно делать проверку hasOwnProperty. Тогда в цикле будут данные без учета прототипов