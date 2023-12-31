import Drawable from './bases/Drawable.js';
import TreeNode from './bases/TreeNode.js';

export default class Scene extends TreeNode {
    constructor(name, gl, program) {
        super(name);
        this.gl = gl;
        this.program = program;
        this.gl.useProgram(this.program);
        this.stack = [];
    }

    changeProgram(program) {
        this.program = program;
        this.gl.useProgram(this.program);
    }

    traverse(node, textureOn) {
        if (node == null)
            return;
        
        if (node.isActive) {
            node.transform();
            if (node instanceof Drawable)
                node.render(this.gl, this.program, textureOn);
            else
                node.render(this.gl, this.program);
        }

        if (node.child != null)
            if (node.isActive)
                this.traverse(node.child, textureOn);
        
        if (node.sibling != null)
            this.traverse(node.sibling, textureOn);
    }

    render(textureOn) {
        this.gl.enable(this.gl.CULL_FACE);

        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LESS);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.traverse(this.child, textureOn);
    }
}