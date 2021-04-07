import TreeNode from './bases/TreeNode.js';

export default class Scene extends TreeNode {
    constructor(name, gl, program) {
        super(name);
        this.gl = gl;
        this.program = program;
        this.gl.useProgram(this.program);
    }

    changeProgram(program) {
        this.program = program;
        this.gl.useProgram(this.program);
    }

    traverse(node) {
        if (node == null)
            return;
        
        // TODO: push matrix
        node.render(this.gl, this.program);

        if (node.child != null)
            this.traverse(node.child);
        
        // TODO: pop matrix
        if (node.sibling != null)
            this.traverse(node.sibling);
    }

    render() {
        this.gl.enable(this.gl.CULL_FACE);

        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LESS);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.traverse(this.child);
    }
}