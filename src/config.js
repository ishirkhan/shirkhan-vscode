import { getKey } from "./util";
/**
 * 插件默认是否转换markdown内容
 * @returns {boolean | undefined}
 */
export function getActiveConvert() {
  return getKey("activeConvert");
}
