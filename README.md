# school-president

[Vue3 文档][Vue3 文档]

天才第一步，Vue3.5 初体验

| date | version | operator | remark |
| - | - | - | - |
| 20190408 | V0.1 | Jeanrry | 1 新增目录 |
| | | | 2 新增章节《与 Vue2 有哪些异同》 |
| | | | 3 新增章节《关于本项目》 |

## 目录
+ 与 Vue2 有哪些异同
+ 关于本项目

## 与 Vue2 有哪些异同
### 安装
Vue CLI 的包名称由 `vue-cli` 改成了 `@vue/cli`。

Vue CLI 需要 Node.js 8.9 或更高版本。

官方文档推荐卸载老版本的 `vue-cli`，我仗着idea创建项目可选vue版本就没卸载

### 配置
Vue3 引入了一个特别方便的图形化界面
```
$ vue ui
```
就可以直接在浏览器里进行相关操作了，包括且不限于安装router，vuex，eslint，运行，打包啥的

原先的build，config等目录取消，合并至node_modules里的xx文件夹下（没找到），具体配置方法貌似能且只能在vue ui里改了

### 其他差别
看不懂也没细看，貌似是说baseUrl弃用，改用publicPath了，其他的不知道了

## 关于本项目
原本想法是做一个文字游戏，具体游戏内容和《监狱大亨》差不多，区别在于是《学校大亨》，由于是模拟经营游戏，所以游戏界面设置也就和一般的“xx管理系统”很类似了

[^_^]: # (变量区)
[Vue3 文档]: https://cli.vuejs.org/zh/
