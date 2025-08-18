// Промисы - это по сути оберка, которая добавляет удобства для написания кода
//

console.log('data...')

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Prosessing...')
    const backendData = {
      server: 'aws',
      port: 2000
    }
    resolve(backendData)
  }, 2000)
})

p.then((data) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      data.modified = true;
      resolve(data)
    }, 2000)
  })
})
  .then((clientData) => {
    console.log('clientData..', clientData)
  })
  .catch(err => console.error(err))
  .finally(() => console.log('finally.'))

//////

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
}

// all - ждет, когда сработают все функции в массиве и потом отрабатывает:
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('all.')
})

// race - ждет, когда произойдет самый первый промис и отрабатывает. 
// Может пригодиться, когда надо понять, какой ответ от сервера получили первым
Promise.rase([sleep(2000), sleep(5000)]).then(() => {
  console.log('rase.')
})