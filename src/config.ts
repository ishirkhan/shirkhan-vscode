import { getKey } from "./util";
/**
 * 插件默认是否转换markdown内容
 */
export function getActiveConvert() {
  return getKey("activeConvert");
}
