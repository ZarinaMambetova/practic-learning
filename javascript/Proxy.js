// Proxy - это класс в js, который позволяет создавать ловушки для объектов, классов и т.д.
// Это удобно для валидации

//Можно сделать фильтры, чтобы скрыть какие-то свойства и значения на стороне клиента

// Объекты
const person = {
  name: 'Maxim',
  age: 25,
  job: 'Frontend'
}

// Передаем два параметра. 1 - это таргет, цель на которую накладываем прокси
// Вторым параметром передаем жэндлеры, то есть матоды для создания ловушек
// get. Идея прокси в том, чтобы добавлять новый функционал к готовым методам.
// Например, в объекте вызвав person.name мы получим результат, значение
// В вызвав через прокси в get можно указать любой функционал и получить более расширенный результат op.name
const op = new Proxy(person, {
  get(target, prop) {
    console.log('target', target)
    console.log('prop', prop)
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error('Error')
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('delete', prop)
    delete target[prop]
    return true
  }
})



