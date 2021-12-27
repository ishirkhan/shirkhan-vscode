import { khanTextToUgText } from "../util/converter";
/**
 *
 * @param {*} md
 * @param {*} isActiveConvert 控制是否转换的状态管理器回调函数，true 标识需要转换，false标识停止转换
 * @returns
 */
export function shirkhanAlphabetPlugin(md, isActiveConvert) {
  const defaultRender = md.renderer.rules.text;
  md.renderer.rules.text = function (tokens, idx, options, env, slf) {
    let result = defaultRender(tokens, idx, options, env, slf);

    if (!isActiveConvert()) return result; // 关闭转换

    // 链接不做转移
    if (idx > 0 && tokens[idx - 1].type === "link_open") {
      return result;
    }

    // 处理escape后进行转码
    result = md.utils.unescapeAll(result);
    result = khanTextToUgText(result);
    return md.utils.escapeHtml(result);
  };

  // 对整个容器加一个class，使得样式只针对我们母语
  md.renderer.backuprender = md.renderer.render;
  md.renderer.render = function (tokens, options, env) {
    const result = md.renderer.backuprender(tokens, options, env);

    if (!isActiveConvert()) return result; // 关闭转换

    return `<div class="shirkhan-markdown-body">${result}</div>`;
  };
  return md;
}
