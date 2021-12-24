# shirkhan markdown 预览器

## 插件用途

本插件是 [shirkhan-alphabet](https://gitee.com/silvaq/shirkhan-alphabet) 规范的一个实现，用来使用 [shirkhan-alphabet](https://gitee.com/silvaq/shirkhan-alphabet) 编写 markdown

本插件目前提供了以下功能：

1. [shirkhan-alphabet](https://gitee.com/silvaq/shirkhan-alphabet) 规范下编写的 markdown 支持实时预览母语转换后的效果
2. ug - khan 写的 markdown 互换

## 使用方式

- 安装插件后打开任何 markdown 文件并选择 preview 就能看到效果。
- 实时预览 markdown 转换功能临时激活或关闭 命令行区域输入 `shirkhan-markdown` toggle convert on/off，切换后文档稍微发生改变就能看到效果
- 打开 khan-markdown,在 vscode 命令行区域输入 `shirkhan-markdown` khan-markdown ->> ug-markdown 命令来转换文档
- 打开 ugmarkdown,在 vscode 命令行区域输入 `shirkhan-markdown` ug-markdown ->> khan-markdown 命令来转换文档

## shirkhan alphabet

> 此字母表由 shirkhan 本人构思创造，仅代表 shirkhan 的喜好，不喜勿愤！

![shirkhan-alphabet-table](https://shirkhan-alphabet.oss-cn-beijing.aliyuncs.com/shirkhan-alphabet/shirkhan-alphabet-table.jpg)

### 注意

- khan 内容转换母语时，所有单词首字母的元音自动补充显示，不需要人为去写，比如: ademler 不用写 xademler 这种形式。
- 当需要单词中间使用 Hemze（当转换母语是有必要）时可以使用 x 字符，比如: 速度 svrxet，照片 svret
- 当 ng,n,g 语义冲突时，需要中间加 h 字符来区分，比如：录音 vnge elish 中的 ng 代表一个字符还是 n+g 是存在语义冲突的，需要改写成 vnhge elsih。 也就是 n 和 g 中间补充 h 字符来消除语义冲突
- 内容转换过程中出现拉丁字母，但是不是 shirkhan 内容时可以使用 “/” 符号包裹内容标识不是 shirkhan 内容。 比如: shirkhan /very awesome/ deydu 中的“very awesome” 被识别为非 shirkhan 内容并将不进行转换
- shirkhan 字母表中 h 字符不能单独出现，只能用来组字符。x 不在需要使用，目前用来转换母语的内容中补充 Hemze 的位置

更多信息请看[shirkhan-alphabet](https://gitee.com/silvaq/shirkhan-alphabet)！

## FAQ

1. 如何停止或者激活此插件？

   - 默认情况下编写 markdown 点击预览时插件会实时转换显示，可以在配置里搜索 `shirkhan-markdown` 出现的配置项来控制这一行为。
   - 通过命令行区域输入 shirkhan 选择出来的 `shirkhan-markdown` toggle convert on/off 命令来切换状态
   - 部分情况下去插件管理中心查找 `shirkhan-markdown` 插件，并且插件页面中选择 disable 来关闭插件

2. 如何覆盖插件的样式？

   - 在 vscode 配置里搜索 markdown styles 出现的配置项中选择添加 item 项，新增的 css 文件可以覆盖插件默认的样式

3. khan 内容中出现其他拉丁字母的内容如何告知转换器不用转换这段内容？
   - 可以使用 "/" 包裹内容来达到这种目的，比如 shirkhan /hello world/ deydu, 这个例子中的 hello world 不会被插件转换

## 更新日志

[Change Log](./CHANGELOG.md)
