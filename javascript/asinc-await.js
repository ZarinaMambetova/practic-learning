const url = 'https://jsonplaceholder.typicode.com/todos'

const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

function fetchTodos() {
  console.log('Started')
  return delay(2000)
    .then(() => fetch(url))
    .then(responce => responce.json())
}

fetchTodos()
  .then(data => {
    console.log('Fetch', data)
  })
  .catch(e => console.error(e))

//////////////////
// Теперь с использованием async-await
// Чтобы использовать внутри функции await, обязательно, чтобы функция была асинхронная

async function fetchAsyncTodos() {
  try {
    await delay(2000)
    const responce = await fetch(url)
    const data = await responce.json()
    console.log('Async', data)
  } catch (e) {
    console.error(e)
  } finally { }
}

fetchAsyncTodos()

// Изначально в js не было понятия async-await. Его в js привнес babel – транспайдер, который позволяет на текущем этапе внедрять экпериментальные фишки
// Когда babel пробегавется по коду, встретив async-await, он оборачивает этот код в промисы. Потом код преобразуется в старый формат. async-await нужны для упрощения разработки
// Асинхронная функция всегда возвращает промис
