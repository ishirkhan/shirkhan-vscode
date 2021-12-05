const vscode = require("vscode");

const { khanText2u } = require("shirkhan-alphabet-converter");

// 插件默认是否转换markdown内容
let activeToConvert = vscode.workspace
  .getConfiguration("shirkhanMarkdown")
  .get("activeConvert");

function shirkhanAlphabetPlugin2(md) {
  md.core.ruler.after(
    "normalize",
    "shirkhan-after-normalize",
    function (state) {
      if (activeToConvert) {
        state.src = khanText2u(state.src);
      }
    }
  );

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
      md.use(shirkhanAlphabetPlugin2);
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
