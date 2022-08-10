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

## 02 - vscode

`vscode`中设置标签颜色：

```json
  "editor.tokenColorCustomizations": {
    "[GitHub Light Default]": {
      "textMateRules": [
        {
          "scope": ["entity.name.tag"],
          "settings": {
            "foreground": "#FF0000"
          }
        },
        {
          "scope": ["string"],
          "settings": {
            "foreground": "#0000ff"
          }
        }
      ]
    }
  }
```

## 03 - array

`Array` 的方法 `fill` 可以为数组填充指定的数据，如果填充的是**基本数据类型**，则是直接填入：

:::details
![](/images/2022/08-03-01.png)
:::

如果是填入的是**引用数据类型**，则填入的是引用，改变其中一个会改变数组中的其他项：

:::details
![](/images/2022/08-03-02.png)
:::

如果需要在 `Array` 中填入指定数量的引用数据类型，直接用 `map` 无效：

:::details
![](/images/2022/08-03-03.png)
:::

可以用扩展运算符先展开，再用数组包裹，已达到可以使用 `map` 方法的效果：

:::details
![](/images/2022/08-03-04.png)
:::

## 04 - table

`table` 标签的 `border` 属性并不被 `html5` 支持，如果想为 `table` 标签设置边框：

- 为 `th`、`td` 标签设置 `border` 属性；
- 为 `table` 元素设置 `border-collapse: collapse;`。

:::warning
在 `table` 元素上设置 `border-spacing` 可以设置单元格之间的间距，但即使设置为 `0` ，边框也只会重合，不会合并
:::

## 05 - v-show

由于 `v-show` 是设置 `CSS` 的属性 `display`，有时候 `v-show` 属性并不生效的原因可能是元素上已经设置了 `display` 属性。如果不适合用 `v-if` 代替，可以设置一个类，设置 `display: none !important;` 来代替 `v-show`。

## 06 - leetcode

`LeetCode` 中链表用 `JavaScript` 描述时，其格式是：

```js
const list = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
};
```

有关题目看上去输入的是**数组**，其实输入的是上面格式。

## 07 - transition

`transition` 属性的过渡效果可以使用 `step()` 表示经过几步达到效果，用这个属性可以实现一些雪碧图的动画效果。

## 08 - cover-image

微信小程序中 `cover-image` `cover-view` 原本是为了覆盖在原生组件之上的，目前原生组件已经支持同层渲染，因此不在需要它们了。

:::details
![](/images/2022/08-08-01.jpg)
![](/images/2022/08-08-02.jpg)
:::

## 09 - video

微信小程序的 `video` 如果隐藏了控制栏等按钮，那么缓冲的时候会没有提示，这时如果用了 `seek()` `play()` 等方法就像是不起作用，这是可以检查是不是正在缓冲 `@waiting=waiting` 。

## 10 - trasnform

`transform` 如果要实现 `3d` 效果，除了要在容器上实现 `transform-style: preserve-3d;` 外，容器的外层还要设置 `perspective: 800px;` 且该属性不能设置在容器上。
