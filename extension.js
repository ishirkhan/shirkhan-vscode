const vscode = require("vscode");

const { khanText2u } = require("shirkhan-alphabet-converter");

// 插件默认是否转换markdown内容
let activeToConvert = vscode.workspace
  .getConfiguration("shirkhanMarkdown")
  .get("activeConvert");

/**
 * 给所有独立的行插入className -> shirkhan
 * @param {*} tokens
 * @param {*} idx
 * @param {*} options
 * @param {*} env
 * @param {*} slf
 * @returns
 */
function injectContainerClassName(tokens, idx, options, env, slf) {
  if (tokens[idx].map && tokens[idx].level === 0) {
    if (activeToConvert) {
      tokens[idx].attrJoin("class", "shirkhan");
    }
  }
  return slf.renderToken(tokens, idx, options, env, slf);
}

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
  md.renderer.rules.paragraph_open = md.renderer.rules.heading_open =
    injectContainerClassName;

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
      console.log("activate ~ activeToConvert", activeToConvert);
    }
  );

  context.subscriptions.push(disposable);

  return {
    extendMarkdownIt(md) {
      console.log(activeToConvert);
      if (activeToConvert) {
        md.use(shirkhanAlphabetPlugin2);
      }
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
