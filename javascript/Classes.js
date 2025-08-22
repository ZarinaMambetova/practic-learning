// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// }
// construtor - метод для того, чтобы инициализировать начальные значения. Принимает объект options (любоен название)
// static -  статическая переменная. Чтобы увидеть эту переменную нужно обращаться не к объекту, а к класса
// Animal.type, а не animal.type

class Animal {
  static type = 'Animal'
  constructor(options) {
    this.name = options.name,
      this.age = options.age,
      this.hasTail = options.hasTail
  }

  voice() {
    console.log('Animal')
  }
}

// Создать объект Animal с помощью класса:

// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// })

// В консоли  можно увидеть на втором уровне не прототип объекта, а прототип класса Animal и только потом объекта
// Поэтому внутри класса можно создавать методы, которые попадут в прототип объекта. У нас функция voice()


// Можно утроить наследование через ключевое слово extends
// Можно передавать дополнительные свойства снова использовав construtor.
//  В дочернем для этого нужно вызвать родительский конструктоз super c набором options
// Можно переписать метод родительский добавив его в дочернем - voice


class Cat extends Animal {
  static type = 'CAT'

  constructor(options) {
    super(options)
    this.color = options.color
  }

  voice() {
    console.log('Cat')
  }

  get ageInfo() {
    return this.age * 7
  }

  set ageInfo(newAge) {
    this.age = newAge
  }
}
// get - Можем посчитать возраст в человеческих годах. и вернуть значение
// set - можем задать любой возраст cat.age = 8, затем вызвать свойство get и он пересчитает возраст

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black'
})

// /////////////////////////////////// пример

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)
    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.background
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  background: 'red'
})

const box2 = new Box({
  selector: '#box2',
  size: 120,
  background: 'blue'
})

class Circle extends Box {
  constructor(options) {
    super(options)
    this.$el.style.borderRadius = '50%'
  }
}

const circle = new Circle({
  selector: '#circle',
  size: 90,
  background: 'green'
})
