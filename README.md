# shirkhan markdown 预览器

## 插件用途

本插件目前提供了以下功能：

1. 使用 shirkhan-alphabet-table 字母表指定的字母来编写的 markdown 内容预览区实时转换 ug 查看
2. ug - khan 写的 markdown 互换

## 使用方式

- 安装插件后打开任何 markdown 文件并选择 preview 就能看到效果。
- 实时预览 markdown 转换功能临时激活或关闭 命令行区域输入 shirkhan-markdown toggle convert on/off，切换后文档稍微发生改变就能看到效果
- 打开 khan-markdown,在 vscode 命令行区域输入 shirkhan-markdown khan-markdown ->> ug-markdown 命令来转换文档
- 打开 ugmarkdown,在 vscode 命令行区域输入 shirkhan-markdown ug-markdown ->> khan-markdown 命令来转换文档

## shirkhan alphabet

> 此字母表由 shirkhan 本人构思创造，仅代表 shirkhan 的喜好，不喜勿愤！

![shirkhan-alphabet-table](./images/shirkhan-alphabet-table.jpg)

### 注意

- khan 内容转换母语时，所有单词首字母的元音自动补充显示，不需要人为去写，比如: ademler 不用写 xademler 这种形式。
- 当需要单词中间使用 Hemze（当转换母语是有必要）时可以使用 x 字符，比如: 速度 svrxet，照片 svret
- 当 ng,n,g 语义冲突时，需要中间加 h 字符来区分，比如：录音 vnge elish 中的 ng 代表一个字符还是 n+g 是存在语义冲突的，需要改写成 vnhge elsih。 也就是 n 和 g 中间补充 h 字符来消除语义冲突
- 内容转换过程中出现拉丁字母，但是不是 shirkhan 内容时可以使用 “/” 符号包裹内容标识不是 shirkhan 内容。 比如: shirkhan /very awesome/ deydu 中的“very awesome” 被识别为非 shirkhan 内容并将不进行转换
- shirkhan 字母表中 h 字符不能单独出现，只能用来组字符。x 不在需要使用，目前用来转换母语的内容中补充 Hemze 的位置

## FAQ

1. 如何停止或者激活此插件？

   - 默认情况下编写 markdown 点击预览时插件会实时转换显示，可以在配置里搜索 shirkhan-markdown 出现的配置项来控制这一行为。
   - 通过命令行区域输入 shirkhan 选择出来的 shirkhan-markdown toggle convert on/off 命令来切换状态
   - 部分情况下去插件管理中心查找 shirkhan-markdown 插件，并且插件页面中选择 disable 来关闭插件

2. 如何覆盖插件的样式？

   - 在 vscode 配置里搜索 markdown styles 出现的配置项中选择添加 item 项，新增的 css 文件可以覆盖插件默认的样式

3. khan 内容中出现其他拉丁字母的内容如何告知转换器不用转换这段内容？
   - 可以使用 "/" 包裹内容来达到这种目的，比如 shirkhan /hello world/ deydu, 这个例子中的 hello world 不会被插件转换

### Bug Fixes

- escapied html 标签进行转移问题修复,新增标点符号,;的替换,版本 0.0.9 ([09ca4e2](https://github.com/ishirkhan/vscode-markdown-previewer/commit/09ca4e2628c59c0d96e3deb3d224153e5591a19d))
- new build ([a80e0a6](https://github.com/ishirkhan/vscode-markdown-previewer/commit/a80e0a6437c3706417f0c6664a05e67dd387f182))
- 修复关闭激活也能转换问题 ([2fea5bf](https://github.com/ishirkhan/vscode-markdown-previewer/commit/2fea5bf86dd415b8e849a9d37acfc5507f3c6422))
- 状态切换后转移还是生效问题修复 ([92301ec](https://github.com/ishirkhan/vscode-markdown-previewer/commit/92301ec7816caf6045ecc31a294fdb17a282867f))

### Features

- logo 和文档更新 ([472eaeb](https://github.com/ishirkhan/vscode-markdown-previewer/commit/472eaeb81dbde663393b72fdb90bf2f032557c41))
- 大区域可以控制转换和不转换,修复以前的 bug,新增 shirkhan 类名,关闭转换时样式回复正常 ([3f1d6ae](https://github.com/ishirkhan/vscode-markdown-previewer/commit/3f1d6ae27781b627abd4ba7a29d484f0633f059f))
- 所有内容被 shirkhan-markdown-body 容器包裹功能已实现 ([554c020](https://github.com/ishirkhan/vscode-markdown-previewer/commit/554c0201f2ea43cee5988422bfba37a39d5993a1))
- 提取工具类,新增 khan 写的 markdown 转换成母语功能 ([f488e6e](https://github.com/ishirkhan/vscode-markdown-previewer/commit/f488e6e1bd238f134b4220f9524d0ee01aec8ff8))
- 新增了转换器的基本功能 ([b75d9e7](https://github.com/ishirkhan/vscode-markdown-previewer/commit/b75d9e7befd0ab2f3733cc008b0f3698a33cd297))
- 新增对 KaTex 的全面的样式,修复符号和公式显示不正常问题,样式调优 ([4223650](https://github.com/ishirkhan/vscode-markdown-previewer/commit/42236505682075dff553b842c479ffd6f1844efd))
- 更新依赖项版本 ([557541d](https://github.com/ishirkhan/vscode-markdown-previewer/commit/557541d2058d4ef5375e8d757335f2f7d670953d))
- 版本 0.0.8 ([a7e34cf](https://github.com/ishirkhan/vscode-markdown-previewer/commit/a7e34cffe4481861f34355145359c4e25c423ef3))
- 目录结构调整,功能分模块化,开启关闭转换功能优化 ([5dce10c](https://github.com/ishirkhan/vscode-markdown-previewer/commit/5dce10c60c3dcd78684f137e657f7c25a835f062))
- 逻辑从纯文本直接转换给成只针对 render.text 进行转换,新增 emoji 的支持,依赖更新 ([bf8c8f3](https://github.com/ishirkhan/vscode-markdown-previewer/commit/bf8c8f31807a5e91f934edb2afe3698547991c96))
- 逻辑改用 shirkhan-retext 库,新增了 ug-markdown 转换 khan-markdown 功能 ([93f1ad1](https://github.com/ishirkhan/vscode-markdown-previewer/commit/93f1ad156b07165ef450d9f7defbd7093cb64da1))
- 针对 letext 新增了暂时的样式支持,转换功能改成通过插件 shirkhanAlphabetPlugin 来支持 ([c620f7a](https://github.com/ishirkhan/vscode-markdown-previewer/commit/c620f7a46e05bd60ed78fc0aaa4f01cad8ed69d9))
