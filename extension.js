const vscode = require("vscode");

const iterator = require("markdown-it-for-inline");
const { khanText2u } = require("shirkhan-alphabet-converter");

let activeToConvert = vscode.workspace
  .getConfiguration("shirkhanMarkdown")
  .get("activeConvert");
// 插件默认是否转换markdown内容

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
      md.use(
        iterator,
        "shirkhan-alphabet-converter",
        "text",
        function (tokens, idx) {
          if (activeToConvert) {
            tokens[idx].content = khanText2u(tokens[idx].content);
          }
        }
      );

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
