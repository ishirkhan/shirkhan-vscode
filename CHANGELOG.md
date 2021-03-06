# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.9.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.8.3...v1.9.0) (2022-04-20)


### Features

* 新增 markdown整体转换其他字符markdown时的ug开头的inlinecode 进行对应转换功能,非ug开头的不进行转换 ([28b2a60](https://github.com/ishirkhan/shirkhan-vscode/commit/28b2a60c8fbd704e77e37e06a9638abfc3dd33ce))

### [1.8.3](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.8.2...v1.8.3) (2022-04-12)


### Features

* 业务代码改造成typescript ([5066fd1](https://github.com/ishirkhan/shirkhan-vscode/commit/5066fd1f55fb9c14ca9aeda0a7e665294d51054c))


### Bug Fixes

* 分音节符出现在组合字符中间时处理不当导致的母语转化结果带分音节符号问题修复 ([51c1ef7](https://github.com/ishirkhan/shirkhan-vscode/commit/51c1ef7ada76999ce621e7f90ded7b23b6efb6cf))

### [1.8.2](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.8.1...v1.8.2) (2022-04-08)

### Features

- 新增 uly 的 document format 格式化器,新增 uly 格式化命令及功能(菜单,Palette) ([c866202](https://github.com/ishirkhan/shirkhan-vscode/commit/c8662029f2b39e8480201b9ea63d6add0e4c2c14))

### [1.8.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.8.0...v1.8.1) (2022-04-08)

### Bug Fixes

- uly to khan-uz 修复 h 字符生成组合字符错误导致的 h 无法正确处理问题 ([6e20569](https://github.com/ishirkhan/shirkhan-vscode/commit/6e20569be52a551af7703ee1a2a0f20783f17764))

## [1.8.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.7.2...v1.8.0) (2022-04-07)

### Features

- 更新 khan-alphabet 依赖版本,新增 inputMode 配置项支持通过设置,菜单,状态栏等方式修改模式 ([ad05dbf](https://github.com/ishirkhan/shirkhan-vscode/commit/ad05dbfd64dda544c4b29014affbd17fff60f65d))
- 新增编写 uly 并母语显示功能,已支持通过切换输入模式输入 khan 和 uly 内容并母语实时预览 ([a5cc2e3](https://github.com/ishirkhan/shirkhan-vscode/commit/a5cc2e36011bc8e35f638e92d822f4917d138cdd))
- 新增 uly markdown 转 ug 的菜单命令 ([d124eb3](https://github.com/ishirkhan/shirkhan-vscode/commit/d124eb386ed870415f47ac5292f794c117c34644))
- 新增 uly to ug , ug to uly 互换的菜单命令和功能 ([60ad26d](https://github.com/ishirkhan/shirkhan-vscode/commit/60ad26da9d6eeba7e2e01d88d7d5ed97200059be))

### [1.7.2](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.7.1...v1.7.2) (2022-03-11)

### Bug Fixes

- 转换器传错参数问题修复,ug 转 khan 修改成 ug 转 khan-uz[是因为 uz 和 khan 支持混写,这时直接在 uz 的基础上继续编写更佳] ([9ad837b](https://github.com/ishirkhan/shirkhan-vscode/commit/9ad837b54558469a22ebf37f3c2e25856510f168))

### [1.7.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.7.0...v1.7.1) (2022-03-11)

### Bug Fixes

- ug 转 khan 时报 freeze 模式不能用 data 的 bug ([1af2cc4](https://github.com/ishirkhan/shirkhan-vscode/commit/1af2cc4388ccde133cd192988ae20c94d9caed23))

## [1.7.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.6.0...v1.7.0) (2022-03-10)

### Features

- 插件功能用 khan-alphabet 来替换,现在支持大小写,支持 khan 和 khan-uz 混写 ([7401300](https://github.com/ishirkhan/shirkhan-vscode/commit/74013005c333e12226f3da1cd16e55c4d3b4af4f))
- 各项菜单文案优化,维语预览开启和关闭现在支持同步修改 vscode 配置 ([3ad42d4](https://github.com/ishirkhan/shirkhan-vscode/commit/3ad42d44be3ed91e317af9921458786de711a8af))

## [1.6.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.5.0...v1.6.0) (2022-01-05)

### ⚠ BREAKING CHANGES

- 响应 alphabet v1.2 的更新,修复 khan 中出现的 khan-uz 预览区没有正确转换问题

### Features

- 响应 alphabet v1.2 的更新,修复 khan 中出现的 khan-uz 预览区没有正确转换问题 ([a864164](https://github.com/ishirkhan/shirkhan-vscode/commit/a8641641e727298022b59460e7db67262f0151cf))

## [1.5.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.3...v1.5.0) (2022-01-05)

### Features

- 新增对 alphabet-table v1.4.0 中新增 5 个字符的支持 ([6daaf06](https://github.com/ishirkhan/shirkhan-vscode/commit/6daaf06e7c4cbf31979e6f81bd98c98205e5cd1e))

### [1.4.3](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.2...v1.4.3) (2022-01-04)

### Features

- 黑色主题样式调整 ([58d62cb](https://github.com/ishirkhan/shirkhan-vscode/commit/58d62cb24c57b271c00d3b11b5b012c888afdb4f))

### [1.4.2](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.1...v1.4.2) (2022-01-04)

### Bug Fixes

- 修复黑色主题代码块 direction 错误问题.样式分成 common,light,dark 三块提升主题复用性和扩展性 ([57000c2](https://github.com/ishirkhan/shirkhan-vscode/commit/57000c2e9b7fd3076a0fb335124172aa8aa13c29))

### [1.4.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.0...v1.4.1) (2022-01-04)

### Bug Fixes

- 修复 dark-theme 时 预览区内容样式不美观,没法动态响应主题变更等问题修复,css 主题文件去掉多余样式 ([e359886](https://github.com/ishirkhan/shirkhan-vscode/commit/e3598869b16aa0f481dc820c9f62b9c490070f34))

## [1.4.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.3.1...v1.4.0) (2022-01-04)

### Features

- markdown-it 插件提取,markdown 插件设计成可以通过全局配置控制使得和 vscode 解耦 ([e3cd3b0](https://github.com/ishirkhan/shirkhan-vscode/commit/e3cd3b09cc302b0beccc67747e3c40f001baf8e1))
- 新增 shirkhan-uz 的支持,菜单,状态栏,命令行准支持触发 ([aeef837](https://github.com/ishirkhan/shirkhan-vscode/commit/aeef837c6dc5927afaf70820b5a025794fc7afb9))

### [1.3.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.3.0...v1.3.1) (2021-12-31)

### Bug Fixes

- 更新最低 vscode 版本为 >1.63.2 ([09baa0a](https://github.com/ishirkhan/shirkhan-vscode/commit/09baa0af41c78bf131e23d56881e6f32f2b04b58))

## [1.3.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.2.0...v1.3.0) (2021-12-31)

### Features

- 命令文案优化,提示优化,执行命令时获取活跃窗口中的 markdown 窗口逻辑优化 ([c795ae7](https://github.com/ishirkhan/shirkhan-vscode/commit/c795ae781c5bb453b0e4af64a437d36e1d4e71d1))
- 当没有 markdown 文件的窗口时 statusBarItems 自动隐藏,争取状态栏干净,打开 markdown 文件时自动显示 ([a7aba71](https://github.com/ishirkhan/shirkhan-vscode/commit/a7aba71c5114f778a0d872f1903d0b8089926a43))

## [1.2.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.1.0...v1.2.0) (2021-12-30)

### Features

- 新增鼠标右键菜单项功能,先有功能都可以通过二级菜单选择触发 ([ee61ff0](https://github.com/ishirkhan/shirkhan-vscode/commit/ee61ff02115141deb2c161500a5f65c30ccd9a42))

## [1.1.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.0.2...v1.1.0) (2021-12-30)

### Features

- 目录结构,逻辑代码大调整,新增只在 markdown 文件的时候才运行命令的约束 ([0e8a890](https://github.com/ishirkhan/shirkhan-vscode/commit/0e8a890fc90926bf111400ee219caf44b244d32f))

### [1.0.2](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.0.1...v1.0.2) (2021-12-29)

### Bug Fixes

- 修复 h 和非双字符的字符一起出现转移错误问题,修复 ug 转 khan 是 ademh 被转成 adem/h,少一个/问题 ([85a5a4b](https://github.com/ishirkhan/shirkhan-vscode/commit/85a5a4bbe89eba0e1dc5b936460e704ee8a5a91a))

### [1.0.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.0.0...v1.0.1) (2021-12-29)

### Features

- update 发布更新脚本,更新依赖 ([db6b9b6](https://github.com/ishirkhan/shirkhan-vscode/commit/db6b9b699a41dbd6c419134c5387915d9be2ea4c))

### Bug Fixes

- 修复 ug 转 shirkhan 的时候 hemze 前面出现符号时没有被去掉问题 ([6b8aa15](https://github.com/ishirkhan/shirkhan-vscode/commit/6b8aa15e2596fc0197d683efe6d0280993e75962))

## [1.0.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v0.1.0...v1.0.0) (2021-12-28)

### Features

- gitignore update ([11aecba](https://github.com/ishirkhan/shirkhan-vscode/commit/11aecbaecc61d3ce411e0cc8e30b56cb4101ab3a))
- status bar 文案调整 ([1547298](https://github.com/ishirkhan/shirkhan-vscode/commit/15472983e0e9fd861087e10db7132e4fbf80306f))
- 依赖更新,主要实现了 ngh 特殊规则,out 目录从版本控制中移除 ([6834ec7](https://github.com/ishirkhan/shirkhan-vscode/commit/6834ec73d7c8944efb43a7f700b026cb5144c43a))
- 图片删除,争取插件体积变小,新增发布脚本 ([5656a02](https://github.com/ishirkhan/shirkhan-vscode/commit/5656a025cdd76dedc25bbb7855c41920da2e62bc))

## 0.1.0 (2021-12-27)

### Features

- logo 和文档更新 ([472eaeb](https://github.com/ishirkhan/shirkhan-vscode/commit/472eaeb81dbde663393b72fdb90bf2f032557c41))
- 修复 ngh 一起时的转换结果不正确问题,标点符号处理交付给转换器而不是代码写死 ([f04bf49](https://github.com/ishirkhan/shirkhan-vscode/commit/f04bf49c07f6d191e2e8eb1dd3ffe597672cfe7a))
- 命令文案改成英文,ng 转换缺陷修正,css 目录微调,文档更新补充必要说明和字母表 ([ef5e4f9](https://github.com/ishirkhan/shirkhan-vscode/commit/ef5e4f91b3946159c8c3ab9bf7c66824412287e2))
- 图片链接换成阿里云 oss,修复 hemze 遇到符号不能自动补全问题,修复问号转换问题 ([460730f](https://github.com/ishirkhan/shirkhan-vscode/commit/460730f5235283fc70283b95acc5db9abecc8ff7))
- 大区域可以控制转换和不转换,修复以前的 bug,新增 shirkhan 类名,关闭转换时样式回复正常 ([3f1d6ae](https://github.com/ishirkhan/shirkhan-vscode/commit/3f1d6ae27781b627abd4ba7a29d484f0633f059f))
- 所有内容被 shirkhan-markdown-body 容器包裹功能已实现 ([554c020](https://github.com/ishirkhan/shirkhan-vscode/commit/554c0201f2ea43cee5988422bfba37a39d5993a1))
- 提取工具类,新增 khan 写的 markdown 转换成母语功能 ([f488e6e](https://github.com/ishirkhan/shirkhan-vscode/commit/f488e6e1bd238f134b4220f9524d0ee01aec8ff8))
- 新增了 changelog,版本 0.0.11 ([9b5c4a0](https://github.com/ishirkhan/shirkhan-vscode/commit/9b5c4a0579e36101cd4a75b64b50dc56b74f5541))
- 新增了转换器的基本功能 ([b75d9e7](https://github.com/ishirkhan/shirkhan-vscode/commit/b75d9e7befd0ab2f3733cc008b0f3698a33cd297))
- 新增对 KaTex 的全面的样式,修复符号和公式显示不正常问题,样式调优 ([4223650](https://github.com/ishirkhan/shirkhan-vscode/commit/42236505682075dff553b842c479ffd6f1844efd))
- 新增开启禁用,khan2ug,ug2khan 等 statusBar 功能 ([1b998d7](https://github.com/ishirkhan/shirkhan-vscode/commit/1b998d720f099db4cdea4a9b28a4c63c4ed1c0cd))
- 更新依赖项版本 ([557541d](https://github.com/ishirkhan/shirkhan-vscode/commit/557541d2058d4ef5375e8d757335f2f7d670953d))
- 版本 0.0.16 ([9498eff](https://github.com/ishirkhan/shirkhan-vscode/commit/9498eff3268ccde3972bd3fb4f1d48a02db33f1a))
- 版本 0.0.14 ([789434e](https://github.com/ishirkhan/shirkhan-vscode/commit/789434e687087630d7108a4fbda0e4517669b9d3))
- 版本 0.0.15 ([b63bae7](https://github.com/ishirkhan/shirkhan-vscode/commit/b63bae7a4e7796f4cb80732f27cfcfddeefbd3b9))
- 版本 0.0.8 ([a7e34cf](https://github.com/ishirkhan/shirkhan-vscode/commit/a7e34cffe4481861f34355145359c4e25c423ef3))
- 目录微调,代码进一步精华,remark-gfm 性能问题修复 ([4f35c64](https://github.com/ishirkhan/shirkhan-vscode/commit/4f35c64b23725ad67c579d9d596fb2a82b4f8c64))
- 目录结构调整,功能分模块化,开启关闭转换功能优化 ([5dce10c](https://github.com/ishirkhan/shirkhan-vscode/commit/5dce10c60c3dcd78684f137e657f7c25a835f062))
- 逻辑从纯文本直接转换给成只针对 render.text 进行转换,新增 emoji 的支持,依赖更新 ([bf8c8f3](https://github.com/ishirkhan/shirkhan-vscode/commit/bf8c8f31807a5e91f934edb2afe3698547991c96))
- 逻辑改用 shirkhan-retext 库,新增了 ug-markdown 转换 khan-markdown 功能 ([93f1ad1](https://github.com/ishirkhan/shirkhan-vscode/commit/93f1ad156b07165ef450d9f7defbd7093cb64da1))
- 针对 letext 新增了暂时的样式支持,转换功能改成通过插件 shirkhanAlphabetPlugin 来支持 ([c620f7a](https://github.com/ishirkhan/shirkhan-vscode/commit/c620f7a46e05bd60ed78fc0aaa4f01cad8ed69d9))

### Bug Fixes

- escapied html 标签进行转移问题修复,新增标点符号,;的替换,版本 0.0.9 ([09ca4e2](https://github.com/ishirkhan/shirkhan-vscode/commit/09ca4e2628c59c0d96e3deb3d224153e5591a19d))
- new build ([a80e0a6](https://github.com/ishirkhan/shirkhan-vscode/commit/a80e0a6437c3706417f0c6664a05e67dd387f182))
- 修复关闭激活也能转换问题 ([2fea5bf](https://github.com/ishirkhan/shirkhan-vscode/commit/2fea5bf86dd415b8e849a9d37acfc5507f3c6422))
- 状态切换后转移还是生效问题修复 ([92301ec](https://github.com/ishirkhan/shirkhan-vscode/commit/92301ec7816caf6045ecc31a294fdb17a282867f))

## 0.0.16 (2021-12-27)

### Bug Fixes

- escapied html 标签进行转移问题修复,新增标点符号,;的替换,版本 0.0.9 ([09ca4e2](https://github.com/ishirkhan/shirkhan-vscode/commit/09ca4e2628c59c0d96e3deb3d224153e5591a19d))
- new build ([a80e0a6](https://github.com/ishirkhan/shirkhan-vscode/commit/a80e0a6437c3706417f0c6664a05e67dd387f182))
- 修复关闭激活也能转换问题 ([2fea5bf](https://github.com/ishirkhan/shirkhan-vscode/commit/2fea5bf86dd415b8e849a9d37acfc5507f3c6422))
- 状态切换后转移还是生效问题修复 ([92301ec](https://github.com/ishirkhan/shirkhan-vscode/commit/92301ec7816caf6045ecc31a294fdb17a282867f))

### Features

- logo 和文档更新 ([472eaeb](https://github.com/ishirkhan/shirkhan-vscode/commit/472eaeb81dbde663393b72fdb90bf2f032557c41))
- 修复 ngh 一起时的转换结果不正确问题,标点符号处理交付给转换器而不是代码写死 ([f04bf49](https://github.com/ishirkhan/shirkhan-vscode/commit/f04bf49c07f6d191e2e8eb1dd3ffe597672cfe7a))
- 命令文案改成英文,ng 转换缺陷修正,css 目录微调,文档更新补充必要说明和字母表 ([ef5e4f9](https://github.com/ishirkhan/shirkhan-vscode/commit/ef5e4f91b3946159c8c3ab9bf7c66824412287e2))
- 图片链接换成阿里云 oss,修复 hemze 遇到符号不能自动补全问题,修复问号转换问题 ([460730f](https://github.com/ishirkhan/shirkhan-vscode/commit/460730f5235283fc70283b95acc5db9abecc8ff7))
- 大区域可以控制转换和不转换,修复以前的 bug,新增 shirkhan 类名,关闭转换时样式回复正常 ([3f1d6ae](https://github.com/ishirkhan/shirkhan-vscode/commit/3f1d6ae27781b627abd4ba7a29d484f0633f059f))
- 所有内容被 shirkhan-markdown-body 容器包裹功能已实现 ([554c020](https://github.com/ishirkhan/shirkhan-vscode/commit/554c0201f2ea43cee5988422bfba37a39d5993a1))
- 提取工具类,新增 khan 写的 markdown 转换成母语功能 ([f488e6e](https://github.com/ishirkhan/shirkhan-vscode/commit/f488e6e1bd238f134b4220f9524d0ee01aec8ff8))
- 新增了 changelog,版本 0.0.11 ([9b5c4a0](https://github.com/ishirkhan/shirkhan-vscode/commit/9b5c4a0579e36101cd4a75b64b50dc56b74f5541))
- 新增了转换器的基本功能 ([b75d9e7](https://github.com/ishirkhan/shirkhan-vscode/commit/b75d9e7befd0ab2f3733cc008b0f3698a33cd297))
- 新增对 KaTex 的全面的样式,修复符号和公式显示不正常问题,样式调优 ([4223650](https://github.com/ishirkhan/shirkhan-vscode/commit/42236505682075dff553b842c479ffd6f1844efd))
- 新增开启禁用,khan2ug,ug2khan 等 statusBar 功能 ([1b998d7](https://github.com/ishirkhan/shirkhan-vscode/commit/1b998d720f099db4cdea4a9b28a4c63c4ed1c0cd))
- 更新依赖项版本 ([557541d](https://github.com/ishirkhan/shirkhan-vscode/commit/557541d2058d4ef5375e8d757335f2f7d670953d))
- 版本 0.0.16 ([9498eff](https://github.com/ishirkhan/shirkhan-vscode/commit/9498eff3268ccde3972bd3fb4f1d48a02db33f1a))
- 版本 0.0.14 ([789434e](https://github.com/ishirkhan/shirkhan-vscode/commit/789434e687087630d7108a4fbda0e4517669b9d3))
- 版本 0.0.15 ([b63bae7](https://github.com/ishirkhan/shirkhan-vscode/commit/b63bae7a4e7796f4cb80732f27cfcfddeefbd3b9))
- 版本 0.0.8 ([a7e34cf](https://github.com/ishirkhan/shirkhan-vscode/commit/a7e34cffe4481861f34355145359c4e25c423ef3))
- 目录微调,代码进一步精华,remark-gfm 性能问题修复 ([4f35c64](https://github.com/ishirkhan/shirkhan-vscode/commit/4f35c64b23725ad67c579d9d596fb2a82b4f8c64))
- 目录结构调整,功能分模块化,开启关闭转换功能优化 ([5dce10c](https://github.com/ishirkhan/shirkhan-vscode/commit/5dce10c60c3dcd78684f137e657f7c25a835f062))
- 逻辑从纯文本直接转换给成只针对 render.text 进行转换,新增 emoji 的支持,依赖更新 ([bf8c8f3](https://github.com/ishirkhan/shirkhan-vscode/commit/bf8c8f31807a5e91f934edb2afe3698547991c96))
- 逻辑改用 shirkhan-retext 库,新增了 ug-markdown 转换 khan-markdown 功能 ([93f1ad1](https://github.com/ishirkhan/shirkhan-vscode/commit/93f1ad156b07165ef450d9f7defbd7093cb64da1))
- 针对 letext 新增了暂时的样式支持,转换功能改成通过插件 shirkhanAlphabetPlugin 来支持 ([c620f7a](https://github.com/ishirkhan/shirkhan-vscode/commit/c620f7a46e05bd60ed78fc0aaa4f01cad8ed69d9))
