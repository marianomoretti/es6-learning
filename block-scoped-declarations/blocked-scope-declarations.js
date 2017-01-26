/**
 * Basic examples for block scoped declarations
 *
 */

var a = 2

{
  let a = 3
  console.log(a)  // 3
}
/**
 * Block scoped declarations workaround before ES6
 */
(function () { }())

console.log(a)

/**
 * Defined block scopes function
 * Note: This it's commented because the linter breakes.
 */
// function blockExample (something) {
//   switch (something) {
//     case 'abc':
//       let items = ['asdf']
//       return items
//     case 'xyz':
//       let items = ['bla']
//       // SyntaxError: Identifier 'items' has already been declared
//       return items
//   }
// }

// console.log(blockExample('abc'))

/**
 * With ES6 block scoped declarations a new term is introduced: Temporal
 * dead zone(TDZ). This comes because let and const definitions are block scoped
 * so that definitions aren't hoisted and doens't exist until those definitions
 */
console.log(aVar) // undefined
// console.log(aLet) // causes ReferenceError: aLet is not defined
var aVar = 1
// let aLet = 2 commented for the linter

/**
 * Reasons for TDZ(exploid):
 * 1. Accessing to a variable before it definition is a bad practice.
 */

{
  foo() // TDZ don't applies for block-scoped functions because are hoisted

  function foo () {
    // ..
  }
}

// foo() //ReferenceError
