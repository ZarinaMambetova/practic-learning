// Интерфейсы - тип, который служит для объектов, классов, чтобы определить, какие поля, свойства должны быть у них
// Это нужно только для разработки

// readonly - поле нельзя менять, только для чтения
// ? - значит необязательное поле
interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

// Можно не указывать цвет
const rect2: Rect = {
  id: '9874',
  size: {
    width: 10,
    height: 5
  },
}

// И можно задать цвет позже. Несмотря на то, что это константа. ее саму нельзя переопределять, но можно изменить свойства:
rect2.color = '#000'

// Если попытаться перезаписать свойство с readonly, ts выдаст ошибку
// rect2.id = '3445'

// можно сразу не прописывать, а задать пустой объект, но уточнить к какому типу он будет относиться
const rect3 = {} as Rect
// раньше так писали:
const rect4 = <Rect>{}

// //////

// Наследование интерфейсов
interface RectWithArea extends Rect {
  // Так показываем, что это функция:
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '345',
  size: {
    width: 20,
    height: 50
  },
  getArea(): number {
    return this.width * this.height
  },
}

// ////////
// Принято в названии ставить первую букву I , что говорит о том, что это имя интерфейса
interface IClock {
  time: Date
  setTime(date: Date): void
}

// Создание класса. Чтобы показать принадлежность к интерфейсу , нужно написать implements
class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// ///////////
// Для объекта, у которого будет много синтаксических ключей
// Указываем поля и типы, вместо того, чтобы прописывать каждый стиль, их может быть очень много
interface IStyles {
  [key: string]: string
}

const css: IStyles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}