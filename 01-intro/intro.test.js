// экспортируем нужную функцию из отслеживаемого файла
const { sum, nativeNull } = require('./intro');

// describe объединяет тесты одной функции, чтобы не запутаться
describe('Sum function:', () => {
  // Тест на верный ответ
  test('should return sum of two values', () => {
    expect(sum(3, 5)).toBe(8)

    // Для простых функций с числами можно использовать toEqual
    expect(sum(3, 5)).toEqual(8)
  })


  // Тест сравнение 
  test('should return value correctly comparing to other', () => {
    // toBeGreaterThan - ответ должен быть больше чем
    expect(sum(3, 5)).toBeGreaterThan(7)

    // toBeGreaterThan - ответ должен быть больше или равно чем
    expect(sum(3, 5)).toBeGreaterThanOrEqual(8)

    // toBeGreaterThan - ответ должен быть больше или равно чем
    expect(sum(3, 5)).toBeGreaterThanOrEqual(8)

    // toBeGreaterThan - ответ должен быть меньше чем
    expect(sum(3, 5)).toBeLessThan(10)

    // toBeGreaterThan - ответ должен быть меньше  или равно чем
    expect(sum(3, 5)).toBeLessThanOrEqual(8)
  })

  // Тест на примеры с точкой в числах. toBeCloseTo - Ответ должен быть близок к
  test('should return sum  two float values', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('nativeNull function:', () => {

  test('should return false value null', () => {
    expect(nativeNull()).toBe(null)

    //Можно вызвать прямой метод
    expect(nativeNull()).toBeNull()

    //Можно проверить на falsy-значения: undefind, null, 0, ''
    expect(nativeNull()).toBeFalsy()

    //Можно проверить , чтобы значение было определено
    expect(nativeNull()).toBeDefined()

    //Можно использовать отрицание not и метод truthy, то есть не массив, не объект, не строка, не число
    expect(nativeNull()).not.toBeTruthy()
    //Можно использовать отрицание - не должно быть undefined
    expect(nativeNull()).not.toBeUndefined()

    //// Если нужно получить NaN, то .toBeNaN()
  })
})