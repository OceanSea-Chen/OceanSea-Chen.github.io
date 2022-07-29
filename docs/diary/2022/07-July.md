# 07-July

## 27 - slice 等

关于`slice`、`substring`、`substr`：从原字符串取出子字符串并返回，不改变原字符串。

|             |            参数            |              说明               |
| ----------- | :------------------------: | :-----------------------------: |
| `slice`     | `(indexStart[, indexEnd])` | 不传参时，indexStart 会被视为 0 |
| `substring` | `(indexStart[, indexEnd])` |              同上               |
| `substr`    |    `(start[, length])`     |  同上（**不建议使用该方法**）   |

:::details
![](/images/2022/07-27-01.jpg)
:::

::: warning

- `slice` 的参数如果是负值则从结尾开始倒数计算位置，表现为 `length + indexStart`。

- `substring` 的参数如果是负值则会被转为 **0**。

- `substr` 的第一个参数如果是负值表示倒数计算的字符位置，第二个参数是负值，会被转为 **0** 而返回空字符串。

:::

:::details
![](/images/2022/07-27-02.jpg)
:::

::: warning

- `slice` 的第一个参数大于第二个参数（正数情况下），返回空字符串。

- `substring` 的第一个参数大于第二个参数，会自动更换两个参数位置。

:::

:::details
![](/images/2022/07-27-03.jpg)
:::

::: tip
`slice` 还可用于数组，优先使用 `slice`。
:::

根据 **deploy.yml** 的配置，如果要使用 **github actions** 则必须使用 **yarn** 安装。

## 28 - 事件

浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。

1. 产生事件对象

```js
let ev = new Event(type, options);
```

:::warning

- `type`：表示事件名称的字符串；
- `options`：事件对象的配置：

  - `bubbles`：表示事件对象是否**冒泡**，默认为 `false`；
  - `cancelable`：表示事件是否可以**被取消**，默认为 `false`；

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
以 **HTML 的 on- 属性** 绑定监听函数需要在函数后加 **()**；

前两种绑定监听函数的方法方法只会在冒泡阶段触发；

`addEventListener` 的最后一个参数如果是布尔值表示是否在捕获阶段触发，默认为 `false`；如果是一个对象则：

- `capture`：是否在**捕获**阶段触发，默认为 `false`。

- `once`：监听函数是否只执行一次，默认为 `false`。

- `passive`：是否禁止监听函数调用 `preventDefault()` 方法，默认为 `false`。

- `signal`：`AbortSignal` 对象，为监听器设置一个信号通道，用来在需要时发出信号，移除监听函数。

:::

3. 触发监听函数

```js
document.dispatchEvent(event);
```

:::details

```html
<div class="div1">
  <button id="btn">触发事件</button>
  <button id="btn2">终止信号</button>
  <div id="test">一个测试罢了</div>
</div>
```

```js
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let test = document.getElementById("test");

// 事件对象
let ev = new Event("ev");
// 控制器实例
const controller = new AbortController();
// 绑定事件
test.addEventListener(
  "ev",
  e => {
    console.log("ev事件触发！", e.target.innerText);
  },
  { signal: controller.signal }
);

// 触发事件
btn.onclick = () => {
  test.dispatchEvent(ev);
};
// 控制器终止信号
btn2.onclick = () => {
  console.log("终止信号");
  controller.abort();
};
```

![](/images/2022/07-28-01.gif)

:::

## 29 - pnpm

1. 在 `linux` 系统中：

- 硬链接（`Hard Link`）：多个文件名指向统一索引节点（`Inode Index`）的情况。

  - 索引节点：存储文件元数据的存储区域叫做索引节点。可以通过索引节点定位到真实的文件数据。

:::details
![](/images/2022/07-29-01.jpg)
:::

- 软链接（`Symbolic Link`）：特殊的文件，包含另一文件的位置信息。

:::details
![](/images/2022/07-29-02.jpg)
:::

2. 在 `windows 中`：可以在 `cmd` 通过 `mklink` 创建软链接和硬链接；

3. 用 `pnpm` 安装时， `node_modules` 文件夹下的依赖是**软链接**，链接到 `.pnpm` 中对应的文件夹，如果该依赖用到了别的包，则其**同样是软链接**，同样链接到 `.pnpm` 中对应的文件夹；`.pnpm` 中文件夹的文件是**硬链接**，链接到 `pnpm` 的存储文件夹中，由于 `windows` 硬链接不支持跨磁盘，所以如果要发挥 `pnpm` 的性能，需要在项目所在磁盘中存在 `pnpm` 的存储文件夹，如果将存储指定到了别的磁盘中，则只能复制对应文件而不是硬链接。
