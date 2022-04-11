import { ExtensionContext } from "vscode";

export function setGlobalStorageKey(
  context: ExtensionContext,
  key: string,
  value: any
) {
  context.globalState.update(key, value);
}

export function getGlobalStorageKey(context: ExtensionContext, key: string) {
  return context.globalState.get(key);
}

/**
 * @param {import("vscode").ExtensionContext} context
 * @param {string} key The stored value or `undefined`.
 * @returns
 */
export function removeGlobalStorageKey(context: ExtensionContext, key: string) {
  context.globalState.setKeysForSync([key]);
  return context.globalState.update(key, undefined);
}
