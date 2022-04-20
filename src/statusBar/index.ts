import {
  CHANGE_UG_MARKDOWN_TO_UZ_COMMAND_ID,
  CHANGE_MARKDOWN_TO_UG_COMMAND_ID,
  CHANGE_MARKDOWN_TO_UZ_COMMAND_ID,
  CHANGE_CONVERT_STATUS_COMMAND_ID,
  CHANGE_INPUTMODE_COMMAND_ID,
} from "../commands";

import { createStatusBarItem } from "../util";

export const convertStatusStatusBarItem = createStatusBarItem({
  id: "convertStatus",
  text: "khan Off",
  tooltip: "toggle khan convert to ug status",
  commandId: CHANGE_CONVERT_STATUS_COMMAND_ID,
});

export const inputModeStatusBarItem = createStatusBarItem({
  id: "inputMode",
  text: "input-mode: khan",
  tooltip: "toggle input mode status",
  commandId: CHANGE_INPUTMODE_COMMAND_ID,
});

export const ugToKhanStatusBarItem = createStatusBarItem({
  id: "ugtokhan",
  text: "ug => uz",
  tooltip: "ug markdown convert to khan-uz markdown",
  commandId: CHANGE_UG_MARKDOWN_TO_UZ_COMMAND_ID,
});

export const khanToUgStatusBarItem = createStatusBarItem({
  id: "khantoug",
  text: "khan => ug",
  tooltip: "khan markdown convert to ug markdown",
  commandId: CHANGE_MARKDOWN_TO_UG_COMMAND_ID,
});
export const khanToUzStatusBarItem = createStatusBarItem({
  id: "khantouz",
  text: "khan => uz",
  tooltip: "khan markdown convert to khan-uz markdown",
  commandId: CHANGE_MARKDOWN_TO_UZ_COMMAND_ID,
});

export function showStatusBarItems() {
  convertStatusStatusBarItem.show();
  inputModeStatusBarItem.show();
  khanToUgStatusBarItem.show();
  khanToUzStatusBarItem.show();
  ugToKhanStatusBarItem.show();
}

export function hideStatusBarItems() {
  convertStatusStatusBarItem.hide();
  inputModeStatusBarItem.hide();
  khanToUgStatusBarItem.hide();
  khanToUzStatusBarItem.hide();
  ugToKhanStatusBarItem.hide();
}
