import vscode from "vscode";

export function isMarkdownFileOpened() {
  const currentEditor = vscode.window.activeTextEditor;
  return (
    currentEditor &&
    currentEditor.document &&
    currentEditor.document.languageId === "markdown"
  );
}
export function getCurrentActiveWindowDocument() {
  return vscode.window.activeTextEditor?.document;
}
