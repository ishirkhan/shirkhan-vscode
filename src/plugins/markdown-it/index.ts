import { khanTextToUgText, ulyTextToUgText } from "../../util";
import vscode from "vscode";

export function khan2ugPlugin(md: any) {
  const defaultRender = md.renderer.rules.text as (...params: any) => string;
  md.renderer.rules.text = function (
    tokens: { type: string }[],
    idx: number,
    options: { shirkhanConvertUg: boolean },
    env: any,
    slf: any
  ) {
    let result = defaultRender(tokens, idx, options, env, slf);
    if (!options["shirkhanConvertUg"]) return result; // 关闭转换

    // 链接不做转移
    if (idx > 0 && tokens[idx - 1].type === "link_open") {
      return result;
    }

    // inputMode
    const mode = vscode.workspace
      .getConfiguration("shirkhanMarkdown")
      .get("inputMode");

    // 处理escape后进行转码
    result = md.utils.unescapeAll(result);
    switch (mode) {
      case "khan":
        result = khanTextToUgText(result);
        break;
      case "uly":
        result = ulyTextToUgText(result);
        break;
      default:
        result = khanTextToUgText(result);
        break;
    }

    return md.utils.escapeHtml(result);
  };

  return md;
}

// 对整个容器加一个class
export function addContainerClass(md: any) {
  md.renderer.backuprender = md.renderer.render as (...params: any) => string;
  md.renderer.render = function (
    tokens: { type: string }[],
    options: { shirkhanConvertUg: boolean; shirkhanContainerClassName: string },
    env: string
  ) {
    const result = md.renderer.backuprender(tokens, options, env);

    if (!options["shirkhanConvertUg"]) return result; // 关闭转换
    // 自定义的容器类名称
    const containerClassName = options["shirkhanContainerClassName"];
    if (!containerClassName) return result;

    return `<div class="${containerClassName}">${result}</div>`;
  };
  return md;
}
