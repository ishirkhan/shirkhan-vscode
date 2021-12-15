import { getActiveConvert } from "./config";
import { getConvertState, setConvertState } from "./storage";
import { registerCommand } from "./registerCommand";
import { showInfoMessage } from "./message";
import { shirkhanAlphabetPlugin } from "./markdownItPlugin";
import emoji from "markdown-it-emoji";

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
