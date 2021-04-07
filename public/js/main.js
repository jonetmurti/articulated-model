import {
    initGL,
    initProgram,
    getFile
} from './libs/utils.js'
import Geometry from './classes/parts/Geometry.js';
import Scene from './classes/Scene.js';

function main(gl, ...programs) {
    if (programs.length == 0)
        throw 'ERROR: No program provided';

    // Init scene
    var scene = new Scene('main', gl, programs[0]);

    // TODO: Init camera

    // TODO: Init light

    // Init parts
    var leftTriangle = new Geometry('triangle', [
        -0.5, 0, 0,
        0, 0, 0,
        -0.5, 0.5, 0
    ], null, null);

    var rightTriangle = new Geometry('triangle', [
        0.5, 0, 0,
        0.5, 0.5, 0,
        0, 0, 0
    ], null, null);

    // Create tree
    scene.addChild(leftTriangle);
    scene.addChild(rightTriangle);

    // Render
    scene.render();
}

document.getElementsByTagName('body')[0].onload = async function() {
    var canvas = document.getElementById('gl-canvas');
    canvas.width = 600;
    canvas.height = 600;

    // Init gl
    var gl = initGL(canvas);

    try {
        const vert = await getFile('shaders/vertex.glsl');
        const frag = await getFile('shaders/fragment.glsl');
        const program = initProgram(gl, vert, frag);
        main(gl, program);
    } catch(err) {
        console.error(err);
    }
};