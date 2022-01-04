import {
  shirkhanToShirkhanUzProcessor,
  shirkhanToUgProcessor,
  ugToShirkhanProcessor,
  shirkhanStringify,
} from "shirkhan-retext";

import { remarkKhan } from "shirkhan-remark";

export function khanTextToUgText(text) {
  return shirkhanToUgProcessor()
    .use(shirkhanStringify)
    .processSync(text)
    .toString();
}

export function khanTextToShirkhanUzText(text) {
  return shirkhanToShirkhanUzProcessor()
    .use(shirkhanStringify)
    .processSync(text)
    .toString();
}

export function ugTextToKhanText(text) {
  return ugToShirkhanProcessor()
    .use(shirkhanStringify)
    .processSync(text)
    .toString();
}

export function khanMarkdownToShirkhanUzMarkdown(markdownText) {
  return remarkKhan()
    .data("khanConverter", (node) => {
      if (node.value) {
        try {
          return khanTextToShirkhanUzText(node.value.toLowerCase());
        } catch (error) {
          console.log("error", error);
        }
      }
      return node.value;
    })
    .processSync(markdownText)
    .toString();
}

export function khanMarkdownToUgMarkdown(markdownText) {
  return remarkKhan()
    .data("khanConverter", (node) => {
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
