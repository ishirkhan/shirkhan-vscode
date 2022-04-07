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
  registerChangeInputModeCommand,
  registerChangeUlyMarkdownToUgCommand,
  registerChangeUgMarkdownToUlyCommand,
} from "./commands";

import {
  convertStatusStatusBarItem,
  showStatusBarItems,
  hideStatusBarItems,
  inputModeStatusBarItem,
} from "./statusBar";
import {
  getActiveMarkdownTextEditor,
  getCurrentActiveColorTheme,
} from "./util";

// const config = vscode.workspace.getConfiguration("shirkhanMarkdown");

/**
 * 初始化配置信息
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function initConfigs(context) {
  const convertState = getActiveConvert(context);
  const message = convertState ? "【已开】" : "【已关】";
  convertStatusStatusBarItem.text = "维语预览：" + message;

  const config = vscode.workspace.getConfiguration("shirkhanMarkdown");

  const mode = config.get("inputMode") || "khan";
  inputModeStatusBarItem.text = "输入模式: " + mode;
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
  registerChangeInputModeCommand(
    context,
    handleInputModeChangeCommand.bind(this, context)
  );

  registerChangeMarkdownToKhanCommand(context);
  registerChangeMarkdownToUgCommand(context);
  registerChangeMarkdownToShirkhanUzCommand(context);
  registerChangeUlyMarkdownToUgCommand(context);
  registerChangeUgMarkdownToUlyCommand(context);
}
/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function handleConvertStatusChangeCommand(context) {
  const currentStage = getConvertState(context);
  const message = !currentStage ? "开启" : "关闭";
  const barText = !currentStage ? "【已开】" : "【已关】";
  convertStatusStatusBarItem.text = "维语预览：" + barText;
  vscode.window.showInformationMessage(`维语预览功能：【${message}】`);

  const config = vscode.workspace.getConfiguration("shirkhanMarkdown");
  const convertState = !config.get("activeConvert");
  config.update("activeConvert", convertState, true);
  markdownInstance.options["shirkhanConvertUg"] = !currentStage;
  setConvertState(context, !currentStage);
}

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function handleInputModeChangeCommand() {
  vscode.window.showQuickPick(["khan", "uly"]).then((mode) => {
    const config = vscode.workspace.getConfiguration("shirkhanMarkdown");
    config.update("inputMode", mode, true);
    inputModeStatusBarItem.text = "输入模式: " + mode;
    vscode.window.showInformationMessage(`输入模式更新成：【${mode}】`);
  });
}

function handleTextEditorChangeEvent() {
  // 没有markdown文件的窗口时吧statusbar给隐藏
  if (!!getActiveMarkdownTextEditor()) {
    showStatusBarItems();
  } else {
    hideStatusBarItems();
  }
}

function handleActiveColorThemeChangeEvent() {
  updateShirkhanMarkdownTheme();
}

// 更新markdown 预览区的container class name
function updateShirkhanMarkdownTheme() {
  const curretnThemeKind = getCurrentActiveColorTheme();
  markdownInstance.options[
    "shirkhanContainerClassName"
  ] = `shirkhan-markdown-body shirkhan-${curretnThemeKind}-theme`;
}
function extendMarkdownIt(md) {
  updateShirkhanMarkdownTheme();
  // 支持表情
  md.use(emoji);
  md.use(khan2ugPlugin);
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
  vscode.window.onDidChangeActiveColorTheme(handleActiveColorThemeChangeEvent);

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
