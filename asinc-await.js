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
    console.log(data)
  })
  .catch(e => console.error(e))