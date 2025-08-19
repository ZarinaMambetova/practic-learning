function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('Success')
      } else {
        console.log(`Value is ${value}`)
      }
    }
  }

}

const sum = (a, b) => a + b
const nativeNull = () => null
console.log(sum(41, 1))