import vscode from "vscode";

import {
  registerCommand,
  khanMarkdownToUgMarkdown,
  khanMarkdownToShirkhanUzMarkdown,
  ugMarkdownToKhanMarkdown,
  isMarkdownFileOpened,
  getActiveMarkdownTextEditor,
  getFileContent,
  openNewTempTab,
} from "../util";

export const CHANGE_CONVERT_STATUS_COMMAND_ID =
  "shirkhan-markdown.changeConvertState";

export const CHANGE_MARKDOWN_TO_UZ_COMMAND_ID =
  "shirkhan-markdown.changeMarkdownToUz";

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
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }
    const markdown = getFileContent(
      getActiveMarkdownTextEditor().document.fileName
    );
    // 转换markdown成母语markdown
    const newMarkdown = khanMarkdownToUgMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-ug.md", "markdown");
  });
}

/**
 * khan 转uz
 * @param {*} context
 * @returns
 */
export function registerChangeMarkdownToShirkhanUzCommand(context) {
  return registerCommand(context, CHANGE_MARKDOWN_TO_UZ_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }
    const markdown = getFileContent(
      getActiveMarkdownTextEditor().document.fileName
    );
    // 转换markdown成uz markdown
    const newMarkdown = khanMarkdownToShirkhanUzMarkdown(markdown);
    // 新打开一个标签显示转换后的uz markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-uz.md", "markdown");
  });
}

export function registerChangeMarkdownToKhanCommand(context) {
  registerCommand(context, CHANGE_MARKDOWN_TO_KHAN__COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }

    const markdown = getFileContent(
      getActiveMarkdownTextEditor().document.fileName
    );
    // 转换markdown成母语markdown
    const newMarkdown = ugMarkdownToKhanMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-khan.md", "markdown");
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
