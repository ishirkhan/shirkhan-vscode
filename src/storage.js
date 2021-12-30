import { setGlobalStorageKey, getGlobalStorageKey } from "./util";
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
