import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkStringify from "remark-stringify";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";

function khanPlugin() {
  return (tree) => {
    const converter = this.data("converter") || undefined;
    if (!converter) return;
    visit(tree, "text", (node, index, parent) => {
      if (parent.type === "link") return;
      node.value = converter(node, index, parent);
    });
  };
}

const processor = unified().use(remarkParse).use(remarkStringify);

export const khanRemark = processor()
  .use(remarkMath)
  .use(remarkGfm)
  .use(khanPlugin);
