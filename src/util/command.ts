import { ExtensionContext } from "vscode";

const vscode = require("vscode");

/**
 * Registers a command that can be invoked via a keyboard shortcut,
 * a menu item, an action, or directly.
 *
 * Registering a command with an existing command identifier twice
 * will cause an error.
 *
 * @param {import("vscode").ExtensionContext} context
 * @param commandUniqName A unique identifier for the command.
 * @param handlerFunc A command handler function.
 * @param thisArg The `this` context used when invoking the handler function.
 * @return Disposable which unregisters this command on disposal.
 */
export function registerCommand(
  context: ExtensionContext,
  commandUniqName: string,
  handlerFunc: any,
  thisArg = undefined
) {
  let disposable = vscode.commands.registerCommand(
    commandUniqName,
    handlerFunc,
    thisArg
  );

  context.subscriptions.push(disposable);
}
