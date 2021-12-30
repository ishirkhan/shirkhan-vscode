import vscode from "vscode";

/**
 * 新开页签显示给定内容
 * @param {string} content
 * @param {string} fileName
 * @param {string} language
 */
export function openNewTempTab(content, fileName, language) {
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
