import vscode from "vscode";

import {
  registerCommand,
  khanMarkdownToUgMarkdown,
  ugMarkdownToKhanMarkdown,
  isMarkdownFileOpened,
  getCurrentActiveWindowDocument,
  getFileContent,
  openNewTempTab,
} from "../util";

export const CHANGE_CONVERT_STATUS_COMMAND_ID =
  "shirkhan-markdown.changeConvertState";

export const CHANGE_MARKDOWN_TO_UG_COMMAND_ID =
  "shirkhan-markdown.changeMarkdownToUg";

export const CHANGE_MARKDOWN_TO_KHAN__COMMAND_ID =
  "shirkhan-markdown.changeMarkdownToKhan";

/**
 * 注册一个 shirkhan-markdown转换母语markdown的命令
 * @returns
 */
export function registerChangeMarkdownToUgCommand(context) {
  return registerCommand(context, CHANGE_MARKDOWN_TO_UG_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage(
        "打开markdown文件并选中markdown窗口才能做此操作！"
      );
      return;
    }
    const markdown = getFileContent(getCurrentActiveWindowDocument().fileName);
    // 转换markdown成母语markdown
    const newMarkdown = khanMarkdownToUgMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-ug.md", "text");
  });
}

export function registerChangeMarkdownToKhanCommand(context) {
  registerCommand(context, CHANGE_MARKDOWN_TO_KHAN__COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage(
        "打开markdown文件并选中markdown窗口才能做此操作！"
      );
      return;
    }

    const markdown = getFileContent(getCurrentActiveWindowDocument().fileName);
    // 转换markdown成母语markdown
    const newMarkdown = ugMarkdownToKhanMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-khan.md", "text");
  });
}

/**
 * @param {any} handlerFunc   A command handler function.
 * @returns
 */
export function registerChangeConvertStatusCommand(context, handlerFunc) {
  return registerCommand(
    context,
    CHANGE_CONVERT_STATUS_COMMAND_ID,
    handlerFunc
  );
}
