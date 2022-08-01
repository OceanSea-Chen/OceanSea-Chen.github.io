# 08 - August

## 01 - tree

```js
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 }
];
```

1. 将一个扁平的数据结构转为树形结构时，如果采用递归算法，会比较浪费性能：

```js
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
  return result;
};
```

2. 如果用另一种思路：

   - 遍历时，以数据中的 `id` 为键，该项为值，所有以 `id` 为 `pid` （或祖先 `pid`） 的项为值的`children`；

   * 同时在 `map` 中以 `pid` 为键的值的 `children` 加入该值。

```js
function theArr2Obj(array) {
  let map = new Map();
  array.forEach((item, index) => {
    let id = item.id,
      pid = item.pid;
    !map.get(id) && map.set(id, { children: [] });
    map.set(id, { ...item, children: map.get(id).children });
    !map.get(pid) && map.set(pid, { children: [] });
    map.get(pid).children.push(map.get(id));
  });
  return map.get(0).children;
}
```
