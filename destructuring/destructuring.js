/*
  The purpose of destructuring is not just less typing, but more declarative
  readability.
 */


// Array example
function foo() {
  return [1,2,3];
}

var tmp = foo(),
  a = tmp[0],
  b = tmp[1],
  c = tmp[2];

console.log( a, b, c );

// Object example
function bar() {
  return {
    x: 4,
    y: 5,
    z: 6
  };
}

var tmp = bar(),
  x = tmp.x, y = tmp.y, z = tmp.z;

console.log( x, y, z );

/*
  With ES6 destructuring
 */

var [ a, b, c ] = foo();
var { x: x, y: y, z: z } = bar();

console.log( a, b, c );       // 1 2 3
console.log( x, y, z );       // 4 5 6


/*
  Destructuring and renaming.
  The syntactic pattern here is source: target (or value: variable-alias).
 */

var { x: bam, y: baz, z: bap } = bar();

console.log( bam, baz, bap );   // 4 5 6
console.log( x, y, z );


/*
  Using destructuring by position
 */

var [,,c,d] = foo();
var { w, z } = bar();

console.log( c, z );        // 3 6
console.log( d, w );        // undefined undefined


/*
  Destructuring Parameters
 */

// Array example
function foo( [ x, y ] ) {
  console.log( x, y );
}

foo( [ 1, 2 ] );          // 1 2
foo( [ 1 ] );           // 1 undefined
foo( [] );              // undefined undefined

/// Object example
function foo( { x, y } ) {
  console.log( x, y );
}

foo( { y: 1, x: 2 } );        // 2 1
foo( { y: 42 } );         // undefined 42
foo( {} );              // undefined undefined