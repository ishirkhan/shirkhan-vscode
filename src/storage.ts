import { ExtensionContext } from "vscode";
import { setGlobalStorageKey, getGlobalStorageKey } from "./util";

export function setConvertState(context: ExtensionContext, value: boolean) {
  return setGlobalStorageKey(context, "convert-state", value);
}

export function getConvertState(context: ExtensionContext) {
  return getGlobalStorageKey(context, "convert-state");
}
