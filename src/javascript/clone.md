# 深拷贝浅拷贝的区别？如何实现一个深拷贝？

深拷贝即对象中的每一个引用类型都重新创建而非共用
浅拷贝对象内的引用对象为共用一个内存空间

## 浅拷贝

`Array.prototype.slice`
`Object.assign`
`[...array]`

## 深拷贝

`JQuery.extend`
`lodash.cloneDeep`
`JSON.parse(JSON.stringify)`（局限性较高，很多数据类型会丢失）

手写深拷贝

```js
function deepClone(object, cache = new WeakMap()) {
  if (typeof object === null) return null
  if (typeof object !== 'object') return object

  if (cache.get(object)) return cache.get(object)

  var el = new object.constructor()

  cache.set(object, el)

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      el[key] = deepClone(object[key], cache)
    }
  }

  return el
}
```
