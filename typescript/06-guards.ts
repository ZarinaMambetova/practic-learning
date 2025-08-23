// Вспомогательные конструкции в TS, которые помогают работать с типами

function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error result'
}

// instanceof -  помогает показать принадлежность к классу
function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

// ///////////////////

type AlertType = 'succsess' | 'danger' | 'warning'

// определяем тип , показываем какие варианты могут быть
function setAlertType(type: AlertType) {
  // ...
}
setAlertType('succsess')
setAlertType('danger')
// Вот так будет неправильно, так как такого значения нет
// setAlertType('default')


