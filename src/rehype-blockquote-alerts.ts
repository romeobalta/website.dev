import type { Node } from "unist";
import { visit } from "unist-util-visit";

type RehypeNode = Node & {
  properties: Record<string, string>;
  children: RehypeNode[];
  value?: string;
  tagName?: string;
};

export function rehypeBlockquoteAlerts() {
  return async function (tree: Node) {
    visit(
      tree,
      { tagName: "p" },
      (node: RehypeNode, index, parent: RehypeNode) => {
        if (parent?.tagName === "blockquote") {
          let current = 0;
          let last = node.children.length - 1;
          while (current <= last) {
            const child = node.children[current];

            if (child.type === "text") {
              if (child.value === "\n") {
                current++;
                continue;
              }
              if (child.value?.startsWith("[!")) {
                console.log(child);
                // search between `[!` and `]`
                const specialEnd = child.value.indexOf("]");
                const special = child.value.slice(2, specialEnd);
                child.value = child.value.slice(specialEnd + 2);
                parent.properties.special = special;
                console.log(child);
                break;
              }
            }
            current++;
          }
        }
      },
    );
  };
}
