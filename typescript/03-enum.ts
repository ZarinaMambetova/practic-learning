// Вспомогательная сущность, который помогает структурировать код, если есть однотипные элементы

enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

// По ключу мы получаем индекс
console.log(membership)
// 1

// По индексу мы получаем имя ключа
console.log(membershipReverse)
// Premium


enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTA = 'INSTA'
}

const social = SocialMedia.INSTA

// Так как мы явно прописали значения, теперь вместо индекса мы получаем значение
console.log(social)
// INSTA