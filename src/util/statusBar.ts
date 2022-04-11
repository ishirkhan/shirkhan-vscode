import vscode, { StatusBarAlignment } from "vscode";
/**
 * @typedef {Object} iItemProps
 * @property {string} id
 * @property {string} text
 * @property {string} commandId
 * @property {string=} tooltip
 * @property {StatusBarAlignment=} [alignment=vscode.StatusBarAlignment.Right] alignment
 * @property {number=} [priority=100] priority
 */

export interface iItemProps {
  id: string;
  text: string;
  commandId: string;
  tooltip?: string;
  alignment?: StatusBarAlignment;
  priority?: number;
}

/**
 *
 * @param {iItemProps} ItemProps
 * @returns
 */
export function createStatusBarItem(ItemProps: iItemProps) {
  const { id, alignment, priority, commandId, text, tooltip } = ItemProps;

  let item = vscode.window.createStatusBarItem(
    id,
    alignment || vscode.StatusBarAlignment.Right,
    priority || 100
  );

  item.command = commandId;
  item.text = text;
  item.tooltip = tooltip || text;

  item.hide();

  return item;
}
