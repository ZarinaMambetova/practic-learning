const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios')

describe('Ajax: echo', () => {

  test('should return value async', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })
  // ловим ошибку
  test('should catch error with async',
    async () => {
      try {
        await Ajax.echo()
      } catch (e) {
        expect(e.message).toBe('error')
      }

    })

  // Или так, без async
  test('should return value promise',
    () => {
      return Ajax.echo('some data').then(data => {
        expect(data).toBe('some data')
      })

    })

  test('should catch error with promise',
    () => {
      return Ajax.echo().catch(err => {
        expect(err).toBeInstanceOf(Error)
      })
    })
})

describe('Ajax: get', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [{ id: 1, title: 'Todo 1', completed: false }]
    response = {
      data: {
        todos
      }
    }
  })

  test('should return data  from backend', () => {
    // Для тестирования не нужно, чтобы функция обращалась к бэку,
    //  нужно отловить этот момент начала запроса.
    // response сами определяем в beforeEach
    axios.get.mockReturnValue(response)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })

  test('should return data  from backend async', async () => {
    // Для тестирования не нужно, чтобы функция обращалась к бэку,
    //  нужно отловить этот момент начала запроса.
    // response сами определяем в beforeEach
    axios.get.mockReturnValue(response)

    const data = await Ajax.get()
    expect(data.todos).toEqual(todos)
  })
})