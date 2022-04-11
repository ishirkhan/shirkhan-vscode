const vscode = require("vscode");

/**
 *
 * @param {string} key
 * @returns {boolean |undefined}
 */
export function getKey(key: string) {
  return vscode.workspace.getConfiguration("shirkhanMarkdown").get(key);
}
