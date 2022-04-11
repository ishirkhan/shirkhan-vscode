import vscode from "vscode";

/**
 * 新开页签显示给定内容
 */
export function openNewTempTab(
  content: string,
  fileName: string,
  language: string
) {
  return vscode.workspace
    .openTextDocument({
      content: content,
      language: language,
    })
    .then((doc) => {
      vscode.window.showTextDocument(doc);
      return doc;
    });
}
