// экспортируем  из отслеживаемого файла
const Lodash = require('./sync');


describe('Lodash compact:', () => {


  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    // или
    expect(_.compact).not.toBeUndefined()
  })
})
