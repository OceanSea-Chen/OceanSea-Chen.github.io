# 07-July

## 27 - slice、substring、substr

关于**slice**、**substring**、**substr**：从原字符串取出子字符串并返回，不改变原字符串。

|           |           参数           |               说明                |
| --------- | :----------------------: | :-------------------------------: |
| slice     | (indexStart[, indexEnd]) | 如果不传参，indexStart 会被视为 0 |
| substring | (indexStart[, indexEnd]) |               同上                |
| substr    |    (start[, length])     |   同上（**不建议使用该方法**）    |

:::details
![](/images/2022/07-01.jpg)
:::

::: warning

- **slice** 的参数如果是负值则从结尾开始倒数计算位置，表现为 _length + indexStart_。

- **substring** 的参数如果是负值则会被转为 0。

- **substr** 的第一个参数如果是负值表示倒数计算的字符位置，第二个参数是负值，会被转为 0 而返回空字符串。

:::

:::details
![](/images/2022/07-02.jpg)
:::

::: warning

- **slice** 的第一个参数大于第二个参数（正数情况下），返回空字符串。

- **substring** 的第一个参数大于第二个参数，会自动更换两个参数位置。

:::

:::details
![](/images/2022/07-03.jpg)
:::

::: tip
**slice** 还可用于数组，优先使用 **slice**。
:::

根据 **deploy.yml** 的配置，如果要使用 **github actions** 则必须使用 **yarn** 安装。

## 28 - 事件

浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。

1. 产生事件对象

```js
let ev = new Event(type, options);
```

:::warning

- type：表示事件名称的字符串；
- options：事件对象的配置：

  - bubbles：表示事件对象是否冒泡，默认为 **false**；
  - cancelable：表示事件是否可以被取消，默认为 **false**；

:::

2. 为事件绑定监听函数

```html
<body onload="doSomething()"></body>
```

```js
window.onload = doSomething;

div.onclick = function (event) {
  console.log("触发事件");
};
```

```js
window.addEventListener("load", doSomething, false);
```

:::warning
以**HTML 的 on- 属性**绑定监听函数需要在函数后加**()**；

前两种绑定监听函数的方法方法只会在冒泡阶段触发；

**addEventListener** 的最后一个参数如果是布尔值表示是否在捕获阶段触发，默认为 false；如果是一个对象则：

- capture：是否在冒泡阶段触发，默认为 false。

- once：监听函数是否只执行一次，默认为 false。

- passive：是否禁止监听函数调用 **preventDefault()** 方法，默认为 false

- singal：为监听器设置一个信号通道，用来在需要时发出信号，移除监听函数。

:::

3. 触发监听函数

```js
para.addEventListener("click", hello, false);
var event = new Event("click");
para.dispatchEvent(event);
```
