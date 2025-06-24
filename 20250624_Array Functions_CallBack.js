//ex1
let intArr = [1,2,3,4]

let doubleValues = intArr => intArr.map(num => num * 2)

console.log(doubleValues(intArr))

//ex2
let intArr = [1,2,3,4]

let onlyEvenValues = intArr => intArr.filter(num => num % 2 == 0)

console.log(onlyEvenValues(intArr))

//ex3
let showFirstAndLast = arr => [arr.find(val => typeof val === 'string'), arr.findLast(val => typeof val === 'string')]

console.log(showFirstAndLast([4, null, {}, false, 'fisrt', null, 'last', false]))

//ex4
function vowelCount(str){
  const vowelChars = ['a', 'e', 'i', 'o', 'u']
  const counts = Object.fromEntries(vowelChars.map(vc => [vc, 0]))
  
  // More efficient than map + filter
  // Iterates only once
  for (const char of str){
    char.toLowerCase() in counts &&
    counts[char.toLowerCase()]++
  }
  return counts
}

console.log(vowelCount('ariel oo'))


