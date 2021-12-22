import { unified } from "unified";
import {
  shirkhanParser,
  shirkhanCompiler,
  toKhanPlugin,
  khanToUgPlugin,
  ugToKhanPlugin,
} from "shirkhan-retext";

import { remarkKhan } from "shirkhan-remark";

export function khanTextToUgText(text) {
  return unified()
    .use(shirkhanParser)
    .use(toKhanPlugin)
    .use(khanToUgPlugin)
    .use(shirkhanCompiler)
    .processSync(text)
    .toString();
}
export function ugTextToKhanText(text) {
  return unified()
    .use(shirkhanParser)
    .use(ugToKhanPlugin)
    .use(shirkhanCompiler)
    .processSync(text)
    .toString();
}

export function khanMarkdownToUgMarkdown(markdownText) {
  return remarkKhan()
    .data("khanConverter", (node) => {
      console.log("我这里是内容节点", node);
      if (node.value) {
        try {
          return khanTextToUgText(node.value.toLowerCase());
        } catch (error) {
          console.log("error", error);
        }
      }
      return node.value;
    })
    .processSync(markdownText)
    .toString();
}

export function ugMarkdownToKhanMarkdown(markdownText) {
  return remarkKhan()
    .data("khanConverter", (node) => {
      if (node.value) {
        try {
          return ugTextToKhanText(node.value.toLowerCase());
        } catch (error) {
          console.log("error", error);
        }
      }
      return node.value;
    })
    .processSync(markdownText)
    .toString();
}
