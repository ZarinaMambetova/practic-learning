// Array<number> - дженерик обозначение типов
const arrayOfNum: Array<number> = [1, 2, 3, 4]
const arrayOfStrings: Array<string> = ['Hello', 'By']


// Массивы могут быть разные, поэтому можно написать универсально: reverse <T>(array: T[]): T[] Так будет подстраиваться под передаваемые параметру
function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNum)
reverse(arrayOfStrings)