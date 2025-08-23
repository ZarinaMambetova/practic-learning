// TS помогает отлавливать ошибки, позволяет писать более сложные приложения, проще рефакторить
// Браузеры понимают только js, не ts. Он нужен только для разработки

const str: string = 'Hello'
console.log(str)

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TS'

const numberArray: number[] = [1, 2, 4, 6, 7]
// или так
const numberArray2: Array<number> = [1, 2, 4, 6, 7]

const stringArray: string[] = ['Hello', 'TS']

// Tuple разные типы данных
const contact: [string, number] = ['Hello', 4561313]

// Any
let variable: any = 42
// Если переопределить число на строку, будет ошибка. 
// Поэтому для таких переменных нужно указать явно, что можуг быть разные типы данных
variable = 'Hello'
variable = []

// ////////
// В функциях указываем тип параметров, которые принимает функция.
// Если вызвать функцию, то она ничего не вернет. Для таких функций нужно писать  :void
// Если вернет, то после двоеточия пишем, какой тип
function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Максим')

// Never - Если функция возвращает ошибку или что-то постоянно что-то делает
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) { }
}

// Type Можем создавать свои типы
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// Только строка или цифра. Вот так уже нельзя:
// const id3: ID = true

// Можно так, но если такие типы возможны, то лучше в функции использовать void
type SomeType = string | null | undefined






