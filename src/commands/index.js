import { registerCommand } from "../util/registerCommand";
import {
  khanMarkdownToUgMarkdown,
  ugMarkdownToKhanMarkdown,
} from "../util/converter";

let vscode = require("vscode");
let fs = require("fs");

// ug-khan 的markdown 互换
export function markdownConverCommands(context) {
  registerCommand(context, "shirkhan-markdown.changeMarkdownToUg", () => {
    const markdown = fs
      .readFileSync(vscode.window.activeTextEditor.document.fileName)
      .toString();

    // 转换markdown成母语markdown
    const newMarkdown = khanMarkdownToUgMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    vscode.workspace
      .openTextDocument({
        content: newMarkdown,
        fileName: "shirkhan-markdown-ug.md",
        language: "Markdown",
      })
      .then((doc) => {
        vscode.window.showTextDocument(doc);
      });
  });

  registerCommand(context, "shirkhan-markdown.changeMarkdownToKhan", () => {
    const markdown = fs
      .readFileSync(vscode.window.activeTextEditor.document.fileName)
      .toString();

    // 转换markdown成母语markdown
    const newMarkdown = ugMarkdownToKhanMarkdown(markdown);
    // 新打开一个标签显示转换后的母语markdown
    vscode.workspace
      .openTextDocument({
        content: newMarkdown,
        fileName: "shirkhan-markdown-khan.md",
        language: "Markdown",
      })
      .then((doc) => {
        vscode.window.showTextDocument(doc);
      });
  });
}
