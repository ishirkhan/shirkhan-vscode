import vscode from "vscode";

export function isMarkdownFileOpened() {
  const editor = getActiveMarkdownTextEditor();
  return !!editor;
}

/**
 *
 * @returns {import("vscode").TextEditor | undefined}
 */
export function getActiveMarkdownTextEditor() {
  const currentActiveTextEditor = vscode.window.activeTextEditor;
  if (
    currentActiveTextEditor &&
    currentActiveTextEditor.document.uri.scheme === "file" &&
    currentActiveTextEditor.document.languageId === "markdown"
  ) {
    return currentActiveTextEditor;
  }

  // 当当前获取焦点的窗口不是markdown窗口的话找其他窗口中markdown的最后一个
  return vscode.window.visibleTextEditors
    .filter(
      (item) =>
        item.document.uri.scheme === "file" &&
        item.document.languageId === "markdown"
    )
    .pop();
}
export function getCurrentActiveWindowDocument() {
  return vscode.window.activeTextEditor?.document;
}
