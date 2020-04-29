const originData = {
  obj: {
    age: '16'
  },
  name: '狗子',
  job: '混子',
  arr: [1, 2]
}

const handler = {
  get(target, key, proxy) {
    /* 如果是数组的话, target则返回Proxy的实例, 其中的target参数 */
    // console.log(target)
    if(typeof target[key] === 'object' && target[key] !== undefined) {
      return new Proxy(target[key], handler)
    }
    return Reflect.get(target, key)
  },
  set(target, key, val, proxy) {
    if(key === 'length') return true
    return Reflect.set(target, key, val)
  }
}

const Data = new Proxy(originData, handler)

// setTimeout(() => {
//   Data.obj.age = '17'
// }, 1000)
// setTimeout(() => {
//   Data.arr[0] = 1
// }, 2000)
setTimeout(() => {
  Data.arr[1] = 2
  Data.arr = []
  console.log(Data.arr)
}, 1000)
export default Data