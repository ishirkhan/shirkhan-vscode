import vscode from "vscode";
import { ulyMarkdownToFormattedMarkdown } from "../util";
/**
 * @type vscode.DocumentFormattingEditProvider
 */
export class UlyMarkdownFormatter {
  /**
   * Provide formatting edits for a whole document.
   *
   * @param {import("vscode").TextDocument} document The document in which the command was invoked.
   * @param {import("vscode").FormattingOptions} options Options controlling formatting.
   * @param {import("vscode").CancellationToken} token A cancellation token.
   * @return {import("vscode").ProviderResult<TextEdit[]} A set of text edits or a thenable that resolves to such. The lack of a result can be
   * signaled by returning `undefined`, `null`, or an empty array.
   */
  provideDocumentFormattingEdits(document) {
    const inputMode = vscode.workspace
      .getConfiguration("shirkhanMarkdown")
      .get("inputMode");

    if (inputMode !== "uly") {
      vscode.window.showErrorMessage(
        "shirkhan markdown formatter:目前只支持 uly 输入模式下的 Markdown 的格式化",
        ["知道了"]
      );
      return;
    }

    const markdownText = document.getText();
    const range = new vscode.Range(
      document.positionAt(0),
      document.positionAt(markdownText.length)
    );
    const newEdit = new vscode.TextEdit(
      range,
      ulyMarkdownToFormattedMarkdown(markdownText)
    );
    return Promise.resolve([newEdit]);
  }
}
