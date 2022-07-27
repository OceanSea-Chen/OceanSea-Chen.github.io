# 07-July

## 27

关于**slice**、**substring**、**substr**：从原字符串取出子字符串并返回，不改变原字符串

|           |           参数           |               说明                |
| --------- | :----------------------: | :-------------------------------: |
| slice     | (indexStart[, indexEnd]) | 如果不传参，indexStart 会被视为 0 |
| substring | (indexStart[, indexEnd]) |               同上                |
| substr    |    (start[, length])     |   同上（**不建议使用该方法**）    |

:::details
![](/images/2022/07-01.jpg)
:::

::: warning
**slice** 的参数如果是负值则从结尾开始倒数计算位置，表现为 _length + indexStart_

**substring** 的参数如果是负值则会被转为 0

**substr** 的第一个参数如果是负值表示倒数计算的字符位置，第二个参数是负值，会被转为 0 而返回空字符串
:::

:::details
![](/images/2022/07-02.jpg)
:::

::: warning
**slice** 的第一个参数大于第二个参数（正数情况下），返回空字符串

**substring** 的第一个参数大于第二个参数，会自动更换两个参数位置
:::

:::details
![](/images/2022/07-03.jpg)
:::

::: tip
**slice** 还可用于数组，优先使用 **slice**
:::

根据 **deploy.yml** 的配置，如果要使用 **github actions** 则必须使用 **yarn** 安装
