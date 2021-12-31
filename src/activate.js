import { getActiveConvert } from "./config";
import { getConvertState, setConvertState } from "./storage";
import { shirkhanAlphabetPlugin } from "./plugins/markdownItPlugin";
import emoji from "markdown-it-emoji";
import {
  registerChangeMarkdownToKhanCommand,
  registerChangeMarkdownToUgCommand,
  registerChangeConvertStatusCommand,
} from "./commands";

import vscode from "vscode";
import { isMarkdownFileOpened } from "./util";

import {
  convertStatusStatusBarItem,
  showStatusBarItems,
  hideStatusBarItems,
} from "./statusBar";

const logger = vscode.window.createOutputChannel("shirkhan");

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function handleStatusChangeCommand(context) {
  const a = vscode.window.activeTextEditor || "no activeTextEditor";
  logger.appendLine(a);
  logger.appendLine("-------------");
  logger.append(vscode.window.visibleTextEditors);

  const currentStage = getConvertState(context);
  const message = !currentStage ? "开启" : "关闭";
  const barText = !currentStage ? "On" : "Off";
  convertStatusStatusBarItem.text = "Shirkhan " + barText;
  vscode.window.showInformationMessage(`转换功能已${message}`);
  setConvertState(context, !currentStage);
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

  // 绑定指令
  registerChangeConvertStatusCommand(
    context,
    handleStatusChangeCommand.bind(this, context)
  );
  registerChangeMarkdownToKhanCommand(context);
  registerChangeMarkdownToUgCommand(context);

  // 监听窗口变更事件控制statusBar

  // 显示状态栏items
  const message = convertState ? "On" : "Off";
  convertStatusStatusBarItem.text = "Shirkhan " + message;
  showStatusBarItems();
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
  hideStatusBarItems();
  console.log("shirkhan-markdown 插件已释放 【deactivate】");
}
