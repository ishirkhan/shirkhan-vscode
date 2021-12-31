import vscode from "vscode";
import emoji from "markdown-it-emoji";

import { getActiveConvert } from "./config";
import { getConvertState, setConvertState } from "./storage";
import { shirkhanAlphabetPlugin } from "./plugins/markdownItPlugin";

import {
  registerChangeMarkdownToKhanCommand,
  registerChangeMarkdownToUgCommand,
  registerChangeConvertStatusCommand,
} from "./commands";

import {
  convertStatusStatusBarItem,
  showStatusBarItems,
  hideStatusBarItems,
} from "./statusBar";
import { getActiveMarkdownTextEditor } from "./util";
/**
 * 初始化配置信息
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function initConfigs(context) {
  const convertState = getActiveConvert(context);
  const message = convertState ? "On" : "Off";
  convertStatusStatusBarItem.text = "Shirkhan " + message;

  setConvertState(context, convertState);
}
/**
 *  绑定指令
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function bindCommands(context) {
  registerChangeConvertStatusCommand(
    context,
    handleConvertStatusChangeCommand.bind(this, context)
  );
  registerChangeMarkdownToKhanCommand(context);
  registerChangeMarkdownToUgCommand(context);
}
/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function handleConvertStatusChangeCommand(context) {
  const currentStage = getConvertState(context);
  const message = !currentStage ? "开启" : "关闭";
  const barText = !currentStage ? "On" : "Off";
  convertStatusStatusBarItem.text = "Shirkhan " + barText;
  vscode.window.showInformationMessage(`转换功能已${message}`);

  setConvertState(context, !currentStage);
}

function handleTextEditorChangeEvent() {
  // 没有markdown文件的窗口时吧statusbar给隐藏
  if (!!getActiveMarkdownTextEditor()) {
    showStatusBarItems();
  } else {
    hideStatusBarItems();
  }
}

function extendMarkdownIt(md, context) {
  // 支持表情
  md.use(emoji);
  md.use(shirkhanAlphabetPlugin, () => {
    // 通过回调实时获取转换状态
    return getConvertState(context);
  });
  return md;
}
/** ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
export function activate(context) {
  console.log("shirkhan-markdown 插件唤醒 【activate】");
  initConfigs(context);
  bindCommands(context);
  showStatusBarItems();

  vscode.window.onDidChangeActiveTextEditor(handleTextEditorChangeEvent);

  return {
    extendMarkdownIt: function (md) {
      return extendMarkdownIt(md, context);
    },
  };
}

export function deactivate() {
  hideStatusBarItems();
  console.log("shirkhan-markdown 插件已释放 【deactivate】");
}
