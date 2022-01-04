import vscode from "vscode";
import emoji from "markdown-it-emoji";

import { getActiveConvert } from "./config";
import { getConvertState, setConvertState } from "./storage";
import { khan2ugPlugin, addContainerClass } from "./plugins/markdown-it";

import {
  registerChangeMarkdownToKhanCommand,
  registerChangeMarkdownToUgCommand,
  registerChangeMarkdownToShirkhanUzCommand,
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
  registerChangeMarkdownToShirkhanUzCommand(context);
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

  markdownInstance.options["shirkhanConvertUg"] = !currentStage;
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

function extendMarkdownIt(md) {
  // 支持表情
  md.use(emoji);

  // md.options["khan2ug"] = true;
  md.use(khan2ugPlugin);
  md.options["shirkhanContainerClassName"] = "shirkhan-markdown-body";
  md.use(addContainerClass);
  return md;
}
/** ------------------------------------------------------------------------------------------------------------------------------------------------------ */

let markdownInstance = undefined;
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
      markdownInstance = md;
      md.options["shirkhanConvertUg"] = getConvertState(context);
      return extendMarkdownIt(md);
    },
  };
}

export function deactivate() {
  hideStatusBarItems();
  console.log("shirkhan-markdown 插件已释放 【deactivate】");
}
