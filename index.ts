import type { Transformer } from "unified";
import { visit } from "unist-util-visit";
import type { Root } from "hast";

export default function attacher() {
  const transformer: Transformer<Root> = function transformer(tree, _file) {
    /** When removing `parent` this compiles fine. */
    visit(tree, "element", function onElement(node, index, parent) {
      // noop
    });
  };

  return transformer;
}
