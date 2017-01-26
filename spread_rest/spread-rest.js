/**
 * With ES6 a new operator is introduced: "...". Called spread or rest operator
 * depending where/how it's used.
 */

function foo (x, y, z) {
  console.log(x, y, z)
}

foo(...[1, 2, 3])  // 1 2 3

/**
 * In front of an array(or any iterable) it acts to "spread" it out into its
 * individual values
 */

/**
 * Also can be used to expand an array inside other
 */

var a = [2, 3, 4]
var b = [ 1, ...a, 5 ]

console.log(b)  // [1,2,3,4,5]

/**
 * In this usage, ... acts to give us a simpler syntactic replacement for the
 * apply(..) method, which we would typically have used pre-ES6 as:
 */

// foo.apply(null, [1, 2, 3])     // 1 2 3 commented for the linter

/**
 * apply works because it contract is thisArg and an arrayArgs
 */

/**
 * It can be used to concat arrays
 */

var c = [1, ...a, 5]

console.log(c) // [1,2,3,4,5]

/**
 * Or modifyng the source variable
 */

var d = [6, 7]
c.push(...d)
console.log(c) // [1,2,3,4,5,6,7]

/**
 * But concat is still faster thant the other ways
 * ref: https://jsperf.com/spread-vs-concat-vs-push/1
 */

var e = [1, 2].concat([3, 4])

console.log(e) // [1,2,3,4]

/**
 * The other common usage can be used for the rest arguments of a function
 * http://stackoverflow.com/questions/20541339/usage-of-rest-parameter-and-spread-operator-in-javascript (exploid)
 */

function bar (x, y, ...z) {
  console.log(x, y, z)
}

bar(1, 2, 3, 4, 5)  // 1 2 [3,4,5]

/**
 * The ...z in this snippet is essentially saying: "gather the rest of the
 * arguments (if any) into an array called z."
 */

/**
 * Iterator + spread operator (exploid)
 * https://rainsoft.io/how-three-dots-changed-javascript/
 */
