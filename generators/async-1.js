const FC_ASYNC_TIMEOUT_MS = 1000
const FC_ASYNC_ERR = false

/**
 * TIP: If an optional value is passed to the generator's next() method,
 * that value becomes the value returned by the
 * generator's current yield operation.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
 */

function fcAsync (time) {
  setTimeout(() => {
    // 5. Async operation kicks in
    if (FC_ASYNC_ERR) {
      // 6.b Throw an exception to the generator
      it.throw(new Error('Thowing an error from ASYNC'))
      return
    }

    // 6.a Resolve the generator
    it.next(`Started: ${time} - Delay: ${FC_ASYNC_TIMEOUT_MS}ms`)
  }, FC_ASYNC_TIMEOUT_MS)

  // 4. We inmediately return a value, so first next will print this
  return 'fcAsync execution started'
}

function *main () {
  try {
    console.log('Ready... Set... GO!!!')

    let time = (new Date()).getTime()
    // 3. call the fcAsync function and yield execution here
    let result = yield fcAsync(time)
    // 7.a fcAsync called next(...), we grab the value passed as result
    //     and continue execution
    console.log(result)
  } catch (err) {
    // 7.b fcAsync throwed an Error, so we catch it and print it
    console.log(err)
  }
}

// 1. Create a Generator
var it = main()
// 2. Invoke the Generator
console.log(it.next())
