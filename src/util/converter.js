import {
  khanTextToKhanUz,
  khanUzTextToUg,
  ugTextToKhanUz,
} from "khan-alphabet";

import { khanRemark, convertPlugin } from "./khan-remark";

export function khanTextToUgText(text) {
  return khanUzTextToUg(khanTextToKhanUz(text));
}

export function khanTextToShirkhanUzText(text) {
  return khanTextToKhanUz(text);
}

export function ugTextToUzText(text) {
  return ugTextToKhanUz(text);
}

export function khanMarkdownToShirkhanUzMarkdown(markdownText) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node) => {
        if (node.value) {
          try {
            return khanTextToShirkhanUzText(node.value);
          } catch (error) {
            console.log("error", error);
          }
        }
        return node.value;
      },
    })
    .processSync(markdownText)
    .toString();
}

export function khanMarkdownToUgMarkdown(markdownText) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node) => {
        if (node.value) {
          try {
            return khanTextToUgText(node.value);
          } catch (error) {
            console.log("error", error);
          }
        }
        return node.value;
      },
    })
    .processSync(markdownText)
    .toString();
}

export function ugMarkdownToKhanMarkdown(markdownText) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node) => {
        if (node.value) {
          try {
            return ugTextToUzText(node.value);
          } catch (error) {
            console.log("error", error);
          }
        }
        return node.value;
      },
    })
    .processSync(markdownText)
    .toString();
}
