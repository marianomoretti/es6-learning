/**
 * A variable definition that can't be reassigned
 */
const a = 1
console.log(a) // 1
// a = 2 // TypeError: Assignment to constant variable.

const b = {}
const c = []

/**
 * But when refers to an object or array variable, can be modified
 */
b.a = 1
c.push(1)
console.log(b)
console.log(c)

