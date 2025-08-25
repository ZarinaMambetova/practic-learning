// экспортируем  из отслеживаемого файла
const Lodash = require('./sync');
// Нужно создать инстант данного класса, так как нельзя вызвать методы напрямую

let _ = new Lodash()

describe('Lodash compact:', () => {
  let array = [false, 42, 0, '', true, null, 'hello']
  // Перед каждым тестов массив в его изначальном виде, так тесты не будут мешать друг другу
  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello']
  })
  // Можно что-то делать после всех тестов
  afterAll(() => {
    _ = new Lodash()
  })


  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    // или
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {

    const result = [42, true, 'hello']
    // toBe тут не подойдет, для сложных значений нужен Equal
    expect(_.compact(array)).toEqual(result)
  })

  test('should not contain falsy values', () => {
    // toContain - значит содержит в себе
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
    expect(_.compact(array)).not.toContain(null)
  })
})

describe('Lodash group by:', () => {

  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    // или
    expect(_.groupBy).not.toBeUndefined()
  })

  test('should group array items by Math.floor', () => {

    const array = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test('should group array items by length', () => {

    const array = ['one', 'two', 'three']
    const result = {
      5: ['three'],
      3: ['one', 'two']
    }
    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  test('should not return array', () => {
    // Не должен быть массивом
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })


})