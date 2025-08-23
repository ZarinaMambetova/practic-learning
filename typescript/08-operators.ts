// Вспомогательные операторы в TS

interface Person {
  name: string
  age: number
}

// keyof - оператор
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

//ВОт так уже нельзя, таких значений нет в интерфейсе
// key - 'job'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

// Чтобы создать тип не со всеми полями, можно использлвать такую контрукцию:
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// Или так
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'


let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'