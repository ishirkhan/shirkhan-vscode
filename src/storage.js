/**
 *
 *@param {import("vscode").ExtensionContext} context
 * @param {string} key
 * @param {any} value
 */
export function setGlobalStorageKey(context, key, value) {
  context.globalState.update(key, value);
}

/**
 * @param {import("vscode").ExtensionContext} context
 * @param {string} key The stored value or `undefined`.
 * @returns
 */
export function getGlobalStorageKey(context, key) {
  return context.globalState.get(key);
}

/**
 * @param {import("vscode").ExtensionContext} context
 * @param {string} key The stored value or `undefined`.
 * @returns
 */
export function removeGlobalStorageKey(context, key) {
  context.globalState.setKeysForSync([key]);
  return context.globalState.update(key, undefined);
}

/** --------------- */

/**
 *
 * @param {import("vscode").ExtensionContext} context
 * @param {boolean} value
 * @returns
 */
export function setConvertState(context, value) {
  return setGlobalStorageKey(context, "convert-state", value);
}

/**
 *
 @param {import("vscode").ExtensionContext} context
 * @returns
 */
export function getConvertState(context) {
  return getGlobalStorageKey(context, "convert-state");
}
