import {
  khanTextToKhanUz,
  khanUzTextToUg,
  khanUzTextToUly,
  ugTextToKhanUz,
  ulyTextToFormat,
  ulyTextToKhanUz,
} from "khan-alphabet";

import { khanRemark, convertPlugin } from "./khan-remark";

export function khanTextToUgText(text: string) {
  return khanUzTextToUg(khanTextToKhanUz(text));
}
export function ulyTextToUgText(text: string) {
  return khanUzTextToUg(ulyTextToKhanUz(text));
}

export function khanTextToShirkhanUzText(text: string) {
  return khanTextToKhanUz(text);
}

export function ugTextToUzText(text: string) {
  return ugTextToKhanUz(text);
}

export function ugTextToUlyText(text: string) {
  return khanUzTextToUly(ugTextToKhanUz(text));
}

export function khanMarkdownToShirkhanUzMarkdown(markdownText: string) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node: any) => {
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

export function khanMarkdownToUgMarkdown(markdownText: string) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node: any) => {
        if (node.type === "inlineCode") {
          node.value = node.value.replace("ug ", "");
        }
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

export function ulyMarkdownToUgMarkdown(markdownText: string) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node: any) => {
        if (node.type === "inlineCode") {
          node.value = node.value.replace("ug ", "");
        }
        if (node.value) {
          try {
            return ulyTextToUgText(node.value);
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

export function ulyMarkdownToFormattedMarkdown(markdownText: string) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node: any) => {
        if (node.value) {
          try {
            return ulyTextToFormat(node.value);
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

export function ugMarkdownToUlyMarkdown(markdownText: string) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node: any) => {
        if (node.type === "inlineCode" && /[\u0626-\u06d5]/.test(node.value)) {
          return "ug " + ugTextToUlyText(node.value);
        }
        if (node.value) {
          try {
            return ugTextToUlyText(node.value);
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

export function ugMarkdownToKhanMarkdown(markdownText: string) {
  return khanRemark()
    .use(convertPlugin, {
      converter: (node: any) => {
        if (node.type === "inlineCode" && /[\u0626-\u06d5]/.test(node.value)) {
          return "ug " + ugTextToUzText(node.value);
        }
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
