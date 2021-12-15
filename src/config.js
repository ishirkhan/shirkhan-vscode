import { getKey } from "./util/config";
/**
 * 插件默认是否转换markdown内容
 * @returns {boolean | undefined}
 */
export function getActiveConvert() {
  return getKey("activeConvert");
}
