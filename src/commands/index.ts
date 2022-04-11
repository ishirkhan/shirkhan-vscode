import vscode, { ExtensionContext } from "vscode";

import {
  registerCommand,
  khanMarkdownToUgMarkdown,
  khanMarkdownToShirkhanUzMarkdown,
  ugMarkdownToKhanMarkdown,
  isMarkdownFileOpened,
  getActiveMarkdownTextEditor,
  getFileContent,
  openNewTempTab,
  ulyMarkdownToUgMarkdown,
  ugMarkdownToUlyMarkdown,
  ulyMarkdownToFormattedMarkdown,
} from "../util";

export const CHANGE_CONVERT_STATUS_COMMAND_ID =
  "shirkhan-markdown.changeConvertState";

export const CHANGE_MARKDOWN_TO_UZ_COMMAND_ID =
  "shirkhan-markdown.changeMarkdownToUz";

export const CHANGE_MARKDOWN_TO_UG_COMMAND_ID =
  "shirkhan-markdown.changeMarkdownToUg";

export const CHANGE_MARKDOWN_TO_UZ__COMMAND_ID =
  "shirkhan-markdown.changeMarkdownToUZ";

// 输入模式切换指令
export const CHANGE_INPUTMODE_COMMAND_ID = "shirkhan-markdown.changeInputMode";
export const CHANGE_ULY_MARKDOWN_TO_UG_COMMAND_ID =
  "shirkhan-markdown.UlyMarkdownToUg";

export const CHANGE_UG_MARKDOWN_TO_ULY_COMMAND_ID =
  "shirkhan-markdown.UgMarkdownToUly";

export const ULY_MARKDOWN_FORMAT_COMMAND_ID =
  "shirkhan-markdown.UlyMarkdownFormat";
/**
 * 注册一个 shirkhan-markdown转换母语markdown的命令
 * @returns
 */
export function registerChangeMarkdownToUgCommand(context: ExtensionContext) {
  return registerCommand(context, CHANGE_MARKDOWN_TO_UG_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }
    const markdown = getFileContent(
      getActiveMarkdownTextEditor()!.document.fileName
    );
    // 转换markdown成母语markdown
    const newMarkdown = khanMarkdownToUgMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-ug.md", "markdown");
  });
}

/**
 * 注册一个 uly-markdown转换母语markdown的命令
 * @returns
 */
export function registerChangeUlyMarkdownToUgCommand(
  context: ExtensionContext
) {
  return registerCommand(context, CHANGE_ULY_MARKDOWN_TO_UG_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }
    const markdown = getFileContent(
      getActiveMarkdownTextEditor()!.document.fileName
    );
    // 转换markdown成母语markdown
    const newMarkdown = ulyMarkdownToUgMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-uly-ug.md", "markdown");
  });
}

/**
 *  uly format
 * @returns
 */
export function registerUlyFormatCommand(context: ExtensionContext) {
  return registerCommand(context, ULY_MARKDOWN_FORMAT_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }

    const inputMode = vscode.workspace
      .getConfiguration("shirkhanMarkdown")
      .get("inputMode");

    if (inputMode !== "uly") return;

    const editor = getActiveMarkdownTextEditor()!;
    const document = editor.document;

    const markdownText = document.getText();
    const range = new vscode.Range(
      document.positionAt(0),
      document.positionAt(markdownText.length)
    );

    const newEdit = new vscode.TextEdit(
      range,
      ulyMarkdownToFormattedMarkdown(markdownText)
    );

    editor.edit((editBuilder) => {
      editBuilder.replace(newEdit.range, newEdit.newText);
    });
  });
}

/**
 * 注册一个 ug-markdown转换uly markdown的命令
 * @returns
 */
export function registerChangeUgMarkdownToUlyCommand(
  context: ExtensionContext
) {
  return registerCommand(context, CHANGE_UG_MARKDOWN_TO_ULY_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }
    const markdown = getFileContent(
      getActiveMarkdownTextEditor()!.document.fileName
    );
    // 转换markdown成母语markdown
    const newMarkdown = ugMarkdownToUlyMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-uly-ug.md", "markdown");
  });
}

/**
 * khan 转uz
 * @param {*} context
 * @returns
 */
export function registerChangeMarkdownToShirkhanUzCommand(
  context: ExtensionContext
) {
  return registerCommand(context, CHANGE_MARKDOWN_TO_UZ_COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }
    const markdown = getFileContent(
      getActiveMarkdownTextEditor()!.document.fileName
    );
    // 转换markdown成uz markdown
    const newMarkdown = khanMarkdownToShirkhanUzMarkdown(markdown);
    // 新打开一个标签显示转换后的uz markdown
    openNewTempTab(newMarkdown, "shirkhan-markdown-uz.md", "markdown");
  });
}

export function registerChangeMarkdownToKhanCommand(context: ExtensionContext) {
  registerCommand(context, CHANGE_MARKDOWN_TO_UZ__COMMAND_ID, () => {
    if (!isMarkdownFileOpened()) {
      vscode.window.showErrorMessage("没有可见的 markdown 文件窗口");
      return;
    }

    const markdown = getFileContent(
      getActiveMarkdownTextEditor()!.document.fileName
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
export function registerChangeConvertStatusCommand(
  context: ExtensionContext,
  handlerFunc: any
) {
  return registerCommand(
    context,
    CHANGE_CONVERT_STATUS_COMMAND_ID,
    handlerFunc
  );
}

/**
 * 修改输入模式的指令
 * @param {any} handlerFunc   A command handler function.
 * @returns
 */
export function registerChangeInputModeCommand(
  context: ExtensionContext,
  handlerFunc: any
) {
  return registerCommand(context, CHANGE_INPUTMODE_COMMAND_ID, handlerFunc);
}
