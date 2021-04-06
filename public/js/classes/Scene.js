import TreeNode from './TreeNode.js';

export default class Scene extends TreeNode {
    constructor(sibling, child) {
        super(sibling, child);
    }

    render(gl, program) {
        // TODO : Traverse child
    }
}