import { getActiveConvert } from "./config";
import { getConvertState, setConvertState } from "./storage";
import { registerCommand } from "./util/registerCommand";
import { showInfoMessage } from "./util/message";
import { shirkhanAlphabetPlugin } from "./markdownItPlugin";
import emoji from "markdown-it-emoji";

import { remarkKhan } from "remark-shirkhan";
import { khanText2ug } from "shirkhan-alphabet";

let vscode = require("vscode");
let path = require("path");
let fs = require("fs");

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
function updateConvertState(context) {
  // 绑定命令行指令
  registerCommand(context, "shirkhan-markdown.changeConvertState", () => {
    const currentStage = getConvertState(context);
    const message = !currentStage ? "开启" : "关闭";
    showInfoMessage(`转换功能已${message}`);
    setConvertState(context, !currentStage);
  });
}

// 基于当前打开的markdow文件 生成一个母语版的markdown文件
function markdownToUg(context) {
  registerCommand(context, "shirkhan-markdown.changeMarkdownToUg", () => {
    const markdown = fs
      .readFileSync(vscode.window.activeTextEditor.document.fileName)
      .toString();

    // 转换markdown成母语markdown
    const ugMarkdown = remarkKhan()
      .data("khanConverter", (node) => khanText2ug(node.value))
      .processSync(markdown)
      .toString();

    // 新打开一个标签显示转换后的母语markdown
    vscode.workspace
      .openTextDocument({
        content: ugMarkdown,
        fileName: "shirkhan-markdown-ug.md",
        language: "Markdown",
      })
      .then((doc) => {
        vscode.window.showTextDocument(doc);
      });
  });
}

/** ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/**
 * @param {import("vscode").ExtensionContext} context
 * @returns
 */
export function activate(context) {
  // 初始化切换状态
  const convertState = getActiveConvert(context);
  setConvertState(context, convertState);

  // 提供通过命令行更新转换状态功能
  updateConvertState(context);

  // 提供通过命令行生成母语markdown 的功能
  markdownToUg(context);

  return {
    extendMarkdownIt(md) {
      // 支持表情
      convertState && md.use(emoji);

      md.use(shirkhanAlphabetPlugin, () => {
        // 通过回调实时获取转换状态
        return getConvertState(context);
      });
      return md;
    },
  };
}
