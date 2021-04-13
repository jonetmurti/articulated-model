// Abstract class
export default class TreeNode {
    static nodeCount = 0; 

    constructor(name) {
        this.sibling = null;
        this.child = null;
        this.name = name;
        this.id = TreeNode.nodeCount;
        this.isActive = true;
        TreeNode.nodeCount++;

        if (new.target === TreeNode) {
            throw new TypeError("Cannot construct TreeNode instances directly");
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
        if (!this.sibling)
            this.sibling = sibling;
        else
            this.sibling.addSibling(sibling);
    }

    // TODO: Implement deleteChild

    // TODO: Implement replaceChild
}