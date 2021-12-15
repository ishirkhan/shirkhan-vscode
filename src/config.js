const vscode = require("vscode");

/**
 *
 * @param {string} key
 * @returns {boolean |undefined}
 */
export function getKey(key) {
  return vscode.workspace.getConfiguration("shirkhanMarkdown").get(key);
}

/**
 * 插件默认是否转换markdown内容
 * @returns {boolean | undefined}
 */
export function getActiveConvert() {
  return getKey("activeConvert");
}
