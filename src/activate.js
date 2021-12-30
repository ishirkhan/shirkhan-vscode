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

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function handleStatusChangeCommand(context) {
  if (!isMarkdownFileOpened()) {
    vscode.window.showErrorMessage("打开markdown文件才能做此操作！");
    return;
  }
  const currentStage = getConvertState(context);
  const message = !currentStage ? "开启" : "关闭";
  const barText = !currentStage ? "On" : "Off";
  convertStatusStatusBarItem.text = "Shirkhan " + barText;
  vscode.window.setStatusBarMessage(`转换功能已${message}`);
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
