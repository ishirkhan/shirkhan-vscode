import { getActiveConvert } from "./config";
import { getConvertState, setConvertState } from "./storage";
import { registerCommand } from "./util/registerCommand";
import { showInfoMessage } from "./util/message";
import { shirkhanAlphabetPlugin } from "./plugins/markdownItPlugin";
import emoji from "markdown-it-emoji";
import { markdownConverCommands } from "./commands";

import vscode from "vscode";

let changeStatusCommandId = "shirkhan-markdown.changeConvertState";
/**
 * 切换转换状态的 StatusBarItem
 * @type {vscode.StatusBarItem}
 */
let myConverStateStatusBarItem = vscode.window.createStatusBarItem(
  "convertStatus",
  vscode.StatusBarAlignment.Right,
  100,
  1
);
myConverStateStatusBarItem.command = changeStatusCommandId;
myConverStateStatusBarItem.text = "Shirkhan";
myConverStateStatusBarItem.tooltip = "toggle khan convert to ug status";

/**
 * khan markdown转ug markdown 的 StatusBarItem
 * @type {vscode.StatusBarItem}
 */
let myKhanToUgConvertStatusBarItem = vscode.window.createStatusBarItem(
  "khantoug",
  vscode.StatusBarAlignment.Right,
  100,
  2
);
myKhanToUgConvertStatusBarItem.command = "shirkhan-markdown.changeMarkdownToUg";
myKhanToUgConvertStatusBarItem.text = "Shirkhan => Ug";
myKhanToUgConvertStatusBarItem.tooltip = "khan markdown convert to ug markdown";

/**
 * ug khan markdown 的 StatusBarItem
 * @type {vscode.StatusBarItem}
 */
let myUgToKhanConvertStatusBarItem = vscode.window.createStatusBarItem(
  "ugtokhan",
  vscode.StatusBarAlignment.Right,
  100,
  3
);
myUgToKhanConvertStatusBarItem.command =
  "shirkhan-markdown.changeMarkdownToKhan";
myUgToKhanConvertStatusBarItem.text = "Ug => Shirkhan";
myUgToKhanConvertStatusBarItem.tooltip = "ug markdown convert to khan markdown";

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function updateConvertState(context) {
  // 绑定命令行指令
  registerCommand(context, changeStatusCommandId, () => {
    const currentStage = getConvertState(context);
    const message = !currentStage ? "开启" : "关闭";
    const barText = !currentStage ? "On" : "Off";
    myConverStateStatusBarItem.text = "Shirkhan " + barText;
    showInfoMessage(`转换功能已${message}`);
    setConvertState(context, !currentStage);
  });
}

/** ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
export function activate(context) {
  console.log("shirkhan-markdown 插件唤醒 【activate】");
  // 初始化切换状态
  const convertState = getActiveConvert(context);
  setConvertState(context, convertState);

  // 提供通过命令行更新转换状态功能
  updateConvertState(context);

  // 提供通过命令行生成母语markdown 的功能
  markdownConverCommands(context);

  const message = convertState ? "On" : "Off";
  myConverStateStatusBarItem.text = "Shirkhan " + message;

  myConverStateStatusBarItem.show();
  myKhanToUgConvertStatusBarItem.show();
  myUgToKhanConvertStatusBarItem.show();

  return {
    extendMarkdownIt(md) {
      // 支持表情
      convertState && md.use(emoji);

      md.use(shirkhanAlphabetPlugin, () => {
        // 通过回调实时获取转换状态
        return getConvertState(context);
      });
      return md;
    },
  };
}

export function deactivate() {
  myConverStateStatusBarItem.hide();
  myKhanToUgConvertStatusBarItem.hide();
  myUgToKhanConvertStatusBarItem.hide();
  console.log("shirkhan-markdown 插件已释放 【deactivate】");
}
