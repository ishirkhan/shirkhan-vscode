const vscode = require("vscode");

const { khanText2ug } = require("shirkhan-alphabet");
const emoji = require("markdown-it-emoji");

// 插件默认是否转换markdown内容
let activeToConvert = vscode.workspace
  .getConfiguration("shirkhanMarkdown")
  .get("activeConvert");

function shirkhanAlphabetPlugin(md) {
  // 支持表情
  md.use(emoji);

  const defaultRender = md.renderer.rules.text;
  md.renderer.rules.text = function (tokens, idx, options, env, slf) {
    let result = defaultRender(tokens, idx, options, env, slf);
    console.log("shirkhanAlphabetPlugin ~ result", result);
    // 链接不做转移
    if (idx > 0 && tokens[idx - 1].type === "link_open") {
      return result;
    }

    // 对标点符号进行转换
    result = result.replace(/\,/gim, "،");
    result = result.replace(/\;/gim, "؛");

    // 对 escapeed html 标签做转移
    result = result.replace(/(\&.*)\؛/gim, "/$1;/");

    return khanText2ug(result);
  };

  // 对整个容器加一个class，使得样式只针对我们母语
  md.renderer.backuprender = md.renderer.render;
  md.renderer.render = function (tokens, options, env) {
    const result = md.renderer.backuprender(tokens, options, env);
    return `<div class="shirkhan-markdown-body">${result}</div>`;
  };
  return md;
}
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "shirkhan-markdown" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "shirkhan-markdown.shirkhan",
    function () {
      // 切换状态
      activeToConvert = !activeToConvert;
      const msg = activeToConvert ? "开启" : "关闭";
      vscode.window.showInformationMessage(
        "shirkhan-alphabet 转换状态变成为:" + msg + " from shirkhan-markdown!"
      );
    }
  );

  context.subscriptions.push(disposable);

  return {
    extendMarkdownIt(md) {
      md.use(shirkhanAlphabetPlugin);
      return md;
    },
  };
}

// this method is called when your extension is deactivated
function deactivate() {
  activeToConvert = !activeToConvert;
  vscode.window.showInformationMessage("shirkhan-markdown deactivate");
}

module.exports = {
  activate,
  deactivate,
};
