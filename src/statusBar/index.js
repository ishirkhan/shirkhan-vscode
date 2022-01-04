import {
  CHANGE_MARKDOWN_TO_KHAN__COMMAND_ID,
  CHANGE_MARKDOWN_TO_UG_COMMAND_ID,
  CHANGE_MARKDOWN_TO_UZ_COMMAND_ID,
  CHANGE_CONVERT_STATUS_COMMAND_ID,
} from "../commands";

import { createStatusBarItem } from "../util";

export const convertStatusStatusBarItem = createStatusBarItem({
  id: "convertStatus",
  text: "Shirkhan Off",
  tooltip: "toggle khan convert to ug status",
  commandId: CHANGE_CONVERT_STATUS_COMMAND_ID,
});

export const ugToKhanStatusBarItem = createStatusBarItem({
  id: "ugtokhan",
  text: "Ug => Shirkhan",
  tooltip: "ug markdown convert to khan markdown",
  commandId: CHANGE_MARKDOWN_TO_KHAN__COMMAND_ID,
});

export const khanToUgStatusBarItem = createStatusBarItem({
  id: "khantoug",
  text: "Shirkhan => Ug",
  tooltip: "khan markdown convert to ug markdown",
  commandId: CHANGE_MARKDOWN_TO_UG_COMMAND_ID,
});
export const khanToUzStatusBarItem = createStatusBarItem({
  id: "khantouz",
  text: "Shirkhan => Uz",
  tooltip: "khan markdown convert to khan-uz markdown",
  commandId: CHANGE_MARKDOWN_TO_UZ_COMMAND_ID,
});

export function showStatusBarItems() {
  convertStatusStatusBarItem.show();
  khanToUgStatusBarItem.show();
  khanToUzStatusBarItem.show();
  ugToKhanStatusBarItem.show();
}

export function hideStatusBarItems() {
  convertStatusStatusBarItem.hide();
  khanToUgStatusBarItem.hide();
  khanToUzStatusBarItem.hide();
  ugToKhanStatusBarItem.hide();
}
