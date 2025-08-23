// Классы создаются также как в ES6

class Typescript {
  version: string
  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// //////////////////

// Используем readonly
// Определяем поля и только потом конструктор
// Несмотря на то, что поля readonly, его можно перезаписать, но только внутри constructor

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

// Это можно записать так:
class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) { }
}

// ////////////// Модификаторы
// 3 вида модификаторов: 
class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go() {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()


// protected - значит поля могут быть доступны классу и его классам-наследникам. Не переменным на основе класса
// пример cat.voise - так нельзя, так как это свойство внутри класса из-за protected 

// public  - по умолчанию все поля public. Доступны везде
// cat.color - можно
// private - доступны только в том классе, в котором определены

// /////////////
// Абстрактные классы нужны для разработки, чтобы от них наследоваться
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}

