# 说说JavaScript中的数据类型？存储上的差别？

`JavaScript` 中数据类型分为简单数据类型和复杂数据类型

其中简单数据类型包括 `string` `boolean` `number` `undefined` `null` `symbol` `bigint` 其中 `symbol` 和 `bigint` 为 `ES6` 新增的数据类型
复杂数据类型统称为 `Object`，例如 `Object` `Array` `Function` 等等

## 存储方式

- 简单数据类型将变量值保存在栈上
- 复杂数据类型将原始数据保存在堆上，堆内存地址保存在栈上

## 赋值方式

- 简单数据类型为变量值复制
- 复杂数据类型为内存地址的复制