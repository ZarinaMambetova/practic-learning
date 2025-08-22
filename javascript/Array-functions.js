const people = [
  { name: 'Elena', age: 25, budget: 40000 },
  { name: 'Anna', age: 17, budget: 3700 },
  { name: 'Maxim', age: 45, budget: 50000 },
  { name: 'Alex', age: 24, budget: 1800 },
  { name: 'Nikita', age: 25, budget: 25000 },
  { name: 'Olga', age: 38, budget: 2300 },
]

// Изначально делали так:
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// ES6
for (let person of people) {
  console.log(person);
}

// // forEach 
people.forEach(function (person) {
  console.log(person);
})

//Еще короче:
people.forEach(person => console.log(person))

// // Map
const newPeople = people.map(person => {
  return person
  // можно только имя return person.name
  // return `${person.name}`
})
console.log(newPeople);

// // Filter
// const adults = people.filter(person => {
//   if (person.age >= 18) {
//     return true
//   }
// })
const adults = people.filter(person => person.age >= 18)
console.log('filter', adults);
// // Reduce
// 0 - это начальное значение total
const amount = people.reduce((total, person) => total + person.budget, 0)
console.log('Reduce', amount);

// // Find
const findOlga = people.find(person => person.name === 'Olga')
console.log('Find', findOlga);

// // FindIndex
const findOlgaIndex = people.findIndex(person => person.name === 'Olga')
console.log('findIndex', findOlgaIndex);

// ///////////////////////// Пример

const filtered = people
  .filter(person => person.budget >= 3000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget
    }
  })
console.log('chain', filtered);