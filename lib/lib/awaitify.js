import thunkify from 'thunkify'

const awaitify = function (fn) {
  return async function (){
    const args = Array.prototype.slice.call(arguments,0)
    return new Promise(function (resolve, reject) {
      const thunked = thunkify(fn).apply(this, args)
      thunked(function(err){
        if (err) {
          console.log('[awaitify] err: '+err)
          console.log(err.stack)
          return reject(err)
        }
        resolve.apply(this, Array.prototype.slice.call(arguments, 1))
      })
    })
  }
}


const awaitify2 = function(fn){
  return function(){
    const args = Array.prototype.slice.call(arguments, 0)
    return new Promise(function(resolve, reject){
      const callback = function(err){
        console.log('[awaitify2] callback...')
        if (err) {
          console.log('[awaitify2] err '+err)
          console.log(err.stack)
          return reject(err)
        }
        let result = Array.prototype.slice.call(arguments, 1)
        if (result.length == 0) return resolve(true)
        if (result.length == 1) return resolve(result[0])
        resolve(result)
      }
      args.push(callback)
      console.log(args)
      fn.apply(fn, args)
    })
  }
}

export default awaitify
export {awaitify2}