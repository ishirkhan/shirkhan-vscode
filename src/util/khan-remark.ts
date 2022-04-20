import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkStringify from "remark-stringify";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";

export function convertPlugin(options: any) {
  return (tree: any) => {
    const { converter } = options;
    if (!converter) {
      console.log("options :>> ", options);
      console.warn("converter is undefiend");
      return;
    }
    visit(tree, "text", (node, index, parent) => {
      if (parent.type === "link") return;
      node.value = converter(node, index, parent);
    });
    // `ug 开头的inline code 特殊处理
    visit(tree, "inlineCode", (node, index, parent) => {
      if (!node.value.startsWith("ug ") && !/[\u0626-\u06d5]/.test(node.value))
        return;
      // node.value = node.value.replace("ug ", "");
      node.value = converter(node, index, parent);
    });
  };
}

const processor = unified().use(remarkParse).use(remarkStringify);

export const khanRemark = processor().use(remarkMath).use(remarkGfm).freeze();
