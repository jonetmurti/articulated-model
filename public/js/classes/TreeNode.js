// Abstract class
export default class TreeNode {
    constructor(sibling, child) {
        this.sibling = sibling;
        this.child = child;

        if (new.target === Node) {
            throw new TypeError("Cannot construct Node instances directly");
        }
    }

    // render: Abstract method

    addChild(child) {
        if (!this.child)
            this.child = child;
        else
            this.child.addSibling(child);
    }

    addSibling(sibling) {
        if (!sibling)
            this.sibling = sibling;
        else
            this.sibling.addSibling(sibling);
    }
}