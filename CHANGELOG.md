# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.3](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.2...v1.4.3) (2022-01-04)


### Features

* 黑色主题样式调整 ([58d62cb](https://github.com/ishirkhan/shirkhan-vscode/commit/58d62cb24c57b271c00d3b11b5b012c888afdb4f))

### [1.4.2](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.1...v1.4.2) (2022-01-04)


### Bug Fixes

* 修复黑色主题代码块direction错误问题.样式分成common,light,dark三块提升主题复用性和扩展性 ([57000c2](https://github.com/ishirkhan/shirkhan-vscode/commit/57000c2e9b7fd3076a0fb335124172aa8aa13c29))

### [1.4.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.4.0...v1.4.1) (2022-01-04)


### Bug Fixes

* 修复dark-theme时 预览区内容样式不美观,没法动态响应主题变更等问题修复,css主题文件去掉多余样式 ([e359886](https://github.com/ishirkhan/shirkhan-vscode/commit/e3598869b16aa0f481dc820c9f62b9c490070f34))

## [1.4.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.3.1...v1.4.0) (2022-01-04)


### Features

* markdown-it 插件提取,markdown插件设计成可以通过全局配置控制使得和vscode解耦 ([e3cd3b0](https://github.com/ishirkhan/shirkhan-vscode/commit/e3cd3b09cc302b0beccc67747e3c40f001baf8e1))
* 新增shirkhan-uz的支持,菜单,状态栏,命令行准支持触发 ([aeef837](https://github.com/ishirkhan/shirkhan-vscode/commit/aeef837c6dc5927afaf70820b5a025794fc7afb9))

### [1.3.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.3.0...v1.3.1) (2021-12-31)


### Bug Fixes

* 更新最低vscode版本为 >1.63.2 ([09baa0a](https://github.com/ishirkhan/shirkhan-vscode/commit/09baa0af41c78bf131e23d56881e6f32f2b04b58))

## [1.3.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.2.0...v1.3.0) (2021-12-31)


### Features

* 命令文案优化,提示优化,执行命令时获取活跃窗口中的markdown窗口逻辑优化 ([c795ae7](https://github.com/ishirkhan/shirkhan-vscode/commit/c795ae781c5bb453b0e4af64a437d36e1d4e71d1))
* 当没有markdown文件的窗口时statusBarItems自动隐藏,争取状态栏干净,打开markdown文件时自动显示 ([a7aba71](https://github.com/ishirkhan/shirkhan-vscode/commit/a7aba71c5114f778a0d872f1903d0b8089926a43))

## [1.2.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.1.0...v1.2.0) (2021-12-30)


### Features

* 新增鼠标右键菜单项功能,先有功能都可以通过二级菜单选择触发 ([ee61ff0](https://github.com/ishirkhan/shirkhan-vscode/commit/ee61ff02115141deb2c161500a5f65c30ccd9a42))

## [1.1.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.0.2...v1.1.0) (2021-12-30)


### Features

* 目录结构,逻辑代码大调整,新增只在markdown文件的时候才运行命令的约束 ([0e8a890](https://github.com/ishirkhan/shirkhan-vscode/commit/0e8a890fc90926bf111400ee219caf44b244d32f))

### [1.0.2](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.0.1...v1.0.2) (2021-12-29)


### Bug Fixes

* 修复h和非双字符的字符一起出现转移错误问题,修复ug转khan是ademh 被转成adem/h,少一个/问题 ([85a5a4b](https://github.com/ishirkhan/shirkhan-vscode/commit/85a5a4bbe89eba0e1dc5b936460e704ee8a5a91a))

### [1.0.1](https://github.com/ishirkhan/shirkhan-vscode/compare/v1.0.0...v1.0.1) (2021-12-29)


### Features

* update 发布更新脚本,更新依赖 ([db6b9b6](https://github.com/ishirkhan/shirkhan-vscode/commit/db6b9b699a41dbd6c419134c5387915d9be2ea4c))


### Bug Fixes

* 修复ug转shirkhan 的时候hemze前面出现符号时没有被去掉问题 ([6b8aa15](https://github.com/ishirkhan/shirkhan-vscode/commit/6b8aa15e2596fc0197d683efe6d0280993e75962))

## [1.0.0](https://github.com/ishirkhan/shirkhan-vscode/compare/v0.1.0...v1.0.0) (2021-12-28)


### Features

* gitignore update ([11aecba](https://github.com/ishirkhan/shirkhan-vscode/commit/11aecbaecc61d3ce411e0cc8e30b56cb4101ab3a))
* status bar 文案调整 ([1547298](https://github.com/ishirkhan/shirkhan-vscode/commit/15472983e0e9fd861087e10db7132e4fbf80306f))
* 依赖更新,主要实现了ngh特殊规则,out目录从版本控制中移除 ([6834ec7](https://github.com/ishirkhan/shirkhan-vscode/commit/6834ec73d7c8944efb43a7f700b026cb5144c43a))
* 图片删除,争取插件体积变小,新增发布脚本 ([5656a02](https://github.com/ishirkhan/shirkhan-vscode/commit/5656a025cdd76dedc25bbb7855c41920da2e62bc))

## 0.1.0 (2021-12-27)


### Features

* logo 和文档更新 ([472eaeb](https://github.com/ishirkhan/shirkhan-vscode/commit/472eaeb81dbde663393b72fdb90bf2f032557c41))
* 修复ngh一起时的转换结果不正确问题,标点符号处理交付给转换器而不是代码写死 ([f04bf49](https://github.com/ishirkhan/shirkhan-vscode/commit/f04bf49c07f6d191e2e8eb1dd3ffe597672cfe7a))
* 命令文案改成英文,ng 转换缺陷修正,css目录微调,文档更新补充必要说明和字母表 ([ef5e4f9](https://github.com/ishirkhan/shirkhan-vscode/commit/ef5e4f91b3946159c8c3ab9bf7c66824412287e2))
* 图片链接换成阿里云oss,修复hemze遇到符号不能自动补全问题,修复问号转换问题 ([460730f](https://github.com/ishirkhan/shirkhan-vscode/commit/460730f5235283fc70283b95acc5db9abecc8ff7))
* 大区域可以控制转换和不转换,修复以前的bug,新增shirkhan类名,关闭转换时样式回复正常 ([3f1d6ae](https://github.com/ishirkhan/shirkhan-vscode/commit/3f1d6ae27781b627abd4ba7a29d484f0633f059f))
* 所有内容被shirkhan-markdown-body容器包裹功能已实现 ([554c020](https://github.com/ishirkhan/shirkhan-vscode/commit/554c0201f2ea43cee5988422bfba37a39d5993a1))
* 提取工具类,新增khan写的markdown转换成母语功能 ([f488e6e](https://github.com/ishirkhan/shirkhan-vscode/commit/f488e6e1bd238f134b4220f9524d0ee01aec8ff8))
* 新增了changelog,版本0.0.11 ([9b5c4a0](https://github.com/ishirkhan/shirkhan-vscode/commit/9b5c4a0579e36101cd4a75b64b50dc56b74f5541))
* 新增了转换器的基本功能 ([b75d9e7](https://github.com/ishirkhan/shirkhan-vscode/commit/b75d9e7befd0ab2f3733cc008b0f3698a33cd297))
* 新增对KaTex的全面的样式,修复符号和公式显示不正常问题,样式调优 ([4223650](https://github.com/ishirkhan/shirkhan-vscode/commit/42236505682075dff553b842c479ffd6f1844efd))
* 新增开启禁用,khan2ug,ug2khan等statusBar功能 ([1b998d7](https://github.com/ishirkhan/shirkhan-vscode/commit/1b998d720f099db4cdea4a9b28a4c63c4ed1c0cd))
* 更新依赖项版本 ([557541d](https://github.com/ishirkhan/shirkhan-vscode/commit/557541d2058d4ef5375e8d757335f2f7d670953d))
* 版本 0.0.16 ([9498eff](https://github.com/ishirkhan/shirkhan-vscode/commit/9498eff3268ccde3972bd3fb4f1d48a02db33f1a))
* 版本0.0.14 ([789434e](https://github.com/ishirkhan/shirkhan-vscode/commit/789434e687087630d7108a4fbda0e4517669b9d3))
* 版本0.0.15 ([b63bae7](https://github.com/ishirkhan/shirkhan-vscode/commit/b63bae7a4e7796f4cb80732f27cfcfddeefbd3b9))
* 版本0.0.8 ([a7e34cf](https://github.com/ishirkhan/shirkhan-vscode/commit/a7e34cffe4481861f34355145359c4e25c423ef3))
* 目录微调,代码进一步精华,remark-gfm性能问题修复 ([4f35c64](https://github.com/ishirkhan/shirkhan-vscode/commit/4f35c64b23725ad67c579d9d596fb2a82b4f8c64))
* 目录结构调整,功能分模块化,开启关闭转换功能优化 ([5dce10c](https://github.com/ishirkhan/shirkhan-vscode/commit/5dce10c60c3dcd78684f137e657f7c25a835f062))
* 逻辑从纯文本直接转换给成只针对render.text进行转换,新增emoji的支持,依赖更新 ([bf8c8f3](https://github.com/ishirkhan/shirkhan-vscode/commit/bf8c8f31807a5e91f934edb2afe3698547991c96))
* 逻辑改用shirkhan-retext库,新增了ug-markdown转换khan-markdown功能 ([93f1ad1](https://github.com/ishirkhan/shirkhan-vscode/commit/93f1ad156b07165ef450d9f7defbd7093cb64da1))
* 针对letext新增了暂时的样式支持,转换功能改成通过插件shirkhanAlphabetPlugin来支持 ([c620f7a](https://github.com/ishirkhan/shirkhan-vscode/commit/c620f7a46e05bd60ed78fc0aaa4f01cad8ed69d9))


### Bug Fixes

* escapied html 标签进行转移问题修复,新增标点符号,;的替换,版本0.0.9 ([09ca4e2](https://github.com/ishirkhan/shirkhan-vscode/commit/09ca4e2628c59c0d96e3deb3d224153e5591a19d))
* new build ([a80e0a6](https://github.com/ishirkhan/shirkhan-vscode/commit/a80e0a6437c3706417f0c6664a05e67dd387f182))
* 修复关闭激活也能转换问题 ([2fea5bf](https://github.com/ishirkhan/shirkhan-vscode/commit/2fea5bf86dd415b8e849a9d37acfc5507f3c6422))
* 状态切换后转移还是生效问题修复 ([92301ec](https://github.com/ishirkhan/shirkhan-vscode/commit/92301ec7816caf6045ecc31a294fdb17a282867f))

## 0.0.16 (2021-12-27)


### Bug Fixes

* escapied html 标签进行转移问题修复,新增标点符号,;的替换,版本0.0.9 ([09ca4e2](https://github.com/ishirkhan/shirkhan-vscode/commit/09ca4e2628c59c0d96e3deb3d224153e5591a19d))
* new build ([a80e0a6](https://github.com/ishirkhan/shirkhan-vscode/commit/a80e0a6437c3706417f0c6664a05e67dd387f182))
* 修复关闭激活也能转换问题 ([2fea5bf](https://github.com/ishirkhan/shirkhan-vscode/commit/2fea5bf86dd415b8e849a9d37acfc5507f3c6422))
* 状态切换后转移还是生效问题修复 ([92301ec](https://github.com/ishirkhan/shirkhan-vscode/commit/92301ec7816caf6045ecc31a294fdb17a282867f))


### Features

* logo 和文档更新 ([472eaeb](https://github.com/ishirkhan/shirkhan-vscode/commit/472eaeb81dbde663393b72fdb90bf2f032557c41))
* 修复ngh一起时的转换结果不正确问题,标点符号处理交付给转换器而不是代码写死 ([f04bf49](https://github.com/ishirkhan/shirkhan-vscode/commit/f04bf49c07f6d191e2e8eb1dd3ffe597672cfe7a))
* 命令文案改成英文,ng 转换缺陷修正,css目录微调,文档更新补充必要说明和字母表 ([ef5e4f9](https://github.com/ishirkhan/shirkhan-vscode/commit/ef5e4f91b3946159c8c3ab9bf7c66824412287e2))
* 图片链接换成阿里云oss,修复hemze遇到符号不能自动补全问题,修复问号转换问题 ([460730f](https://github.com/ishirkhan/shirkhan-vscode/commit/460730f5235283fc70283b95acc5db9abecc8ff7))
* 大区域可以控制转换和不转换,修复以前的bug,新增shirkhan类名,关闭转换时样式回复正常 ([3f1d6ae](https://github.com/ishirkhan/shirkhan-vscode/commit/3f1d6ae27781b627abd4ba7a29d484f0633f059f))
* 所有内容被shirkhan-markdown-body容器包裹功能已实现 ([554c020](https://github.com/ishirkhan/shirkhan-vscode/commit/554c0201f2ea43cee5988422bfba37a39d5993a1))
* 提取工具类,新增khan写的markdown转换成母语功能 ([f488e6e](https://github.com/ishirkhan/shirkhan-vscode/commit/f488e6e1bd238f134b4220f9524d0ee01aec8ff8))
* 新增了changelog,版本0.0.11 ([9b5c4a0](https://github.com/ishirkhan/shirkhan-vscode/commit/9b5c4a0579e36101cd4a75b64b50dc56b74f5541))
* 新增了转换器的基本功能 ([b75d9e7](https://github.com/ishirkhan/shirkhan-vscode/commit/b75d9e7befd0ab2f3733cc008b0f3698a33cd297))
* 新增对KaTex的全面的样式,修复符号和公式显示不正常问题,样式调优 ([4223650](https://github.com/ishirkhan/shirkhan-vscode/commit/42236505682075dff553b842c479ffd6f1844efd))
* 新增开启禁用,khan2ug,ug2khan等statusBar功能 ([1b998d7](https://github.com/ishirkhan/shirkhan-vscode/commit/1b998d720f099db4cdea4a9b28a4c63c4ed1c0cd))
* 更新依赖项版本 ([557541d](https://github.com/ishirkhan/shirkhan-vscode/commit/557541d2058d4ef5375e8d757335f2f7d670953d))
* 版本 0.0.16 ([9498eff](https://github.com/ishirkhan/shirkhan-vscode/commit/9498eff3268ccde3972bd3fb4f1d48a02db33f1a))
* 版本0.0.14 ([789434e](https://github.com/ishirkhan/shirkhan-vscode/commit/789434e687087630d7108a4fbda0e4517669b9d3))
* 版本0.0.15 ([b63bae7](https://github.com/ishirkhan/shirkhan-vscode/commit/b63bae7a4e7796f4cb80732f27cfcfddeefbd3b9))
* 版本0.0.8 ([a7e34cf](https://github.com/ishirkhan/shirkhan-vscode/commit/a7e34cffe4481861f34355145359c4e25c423ef3))
* 目录微调,代码进一步精华,remark-gfm性能问题修复 ([4f35c64](https://github.com/ishirkhan/shirkhan-vscode/commit/4f35c64b23725ad67c579d9d596fb2a82b4f8c64))
* 目录结构调整,功能分模块化,开启关闭转换功能优化 ([5dce10c](https://github.com/ishirkhan/shirkhan-vscode/commit/5dce10c60c3dcd78684f137e657f7c25a835f062))
* 逻辑从纯文本直接转换给成只针对render.text进行转换,新增emoji的支持,依赖更新 ([bf8c8f3](https://github.com/ishirkhan/shirkhan-vscode/commit/bf8c8f31807a5e91f934edb2afe3698547991c96))
* 逻辑改用shirkhan-retext库,新增了ug-markdown转换khan-markdown功能 ([93f1ad1](https://github.com/ishirkhan/shirkhan-vscode/commit/93f1ad156b07165ef450d9f7defbd7093cb64da1))
* 针对letext新增了暂时的样式支持,转换功能改成通过插件shirkhanAlphabetPlugin来支持 ([c620f7a](https://github.com/ishirkhan/shirkhan-vscode/commit/c620f7a46e05bd60ed78fc0aaa4f01cad8ed69d9))
