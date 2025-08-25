// LocalStorage - хранилище данных при перезагрузке страницы

// setItem - записать
// getItem - получить
// localStorage.setItem('имя хранилища', что будем хранить)

// доступен в window
window.localStorage

// Может работать только со строками .toString()
// Если записать число в LS, то оно преобразуется в строку
localStorage.setItem('number', number)
// на самом деле из под капота будет так:
localStorage.setItem('number', number.toString())

// Для удаления всего содержимого
localStorage.clear

// Для удаления конкретной ячейки с данными
localStorage.removeItem('имя')

// Если нужно сохранить объект
localStorage.setItem('objectName', JSON.stringyfy(object))

// Чтобы получить этот объект
const row = localStorage.getItem('objectName')
const p = JSON.parse(row)

// Так можно проверить и сохранить изменения в LS в другой вкладке
window.addEventListener('store', event => {
  console.log(event)
})

// Отличия от куки:
// 1/ LS больше по объему, чем объект куки
// 2/ Данные из LS не улетают на сервер, в отличии от куки