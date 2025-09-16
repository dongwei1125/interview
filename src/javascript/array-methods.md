# 数组的常用方法有哪些？

## 增加

`push` `shift` `splice` `concat`

## 删除

`pop` `unshift` `splice`

## 修改

`sort` `reverse` `copyWithin` `flat` `flatMap`

## 查询

`find` `findIndex` `lastFind` `lastFindIndex`
`indexOf` `includes` `at`

## 遍历

`forEach` `map`（返回新数组）`some`（有一真则为真）`every`（全部为真则为真）`reduce` `filter`

## 其它

`Array.from`（将类数组转换为数组，第二个参数为 `map` 回调）
`Array.of`（将参数序列转换为数组）
`join`
`slice`
`fill`（填充元素，可以指定开始和结束位置）

以下三方法均返回遍历器，可用 `for...of` 循环取出
`value`
`keys`
`entries`