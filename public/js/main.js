import {
    initGL,
    initProgram,
    getFile
} from './libs/utils.js';
import {
    screenWidth,
    screenHeight
} from './const/canvas-const.js';
import Geometry from './classes/parts/Geometry.js';
import Scene from './classes/Scene.js';
import Camera from './classes/cameras/Camera.js';
import { CubeModel } from './models/Cube.js';

function main(gl, ...programs) {
    if (programs.length == 0)
        throw 'ERROR: No program provided';

    // Init scene
    var scene = new Scene('main', gl, programs[0]);

    // TODO: Init camera
    var camera = new Camera('camera', [0, 0, 0]);
    let camTranSlider = document.getElementById('cam-trans');
    camTranSlider.addEventListener('input', function() {
        camera.translateZ(camTranSlider.value);
        scene.render();
    });


    // TODO: Init light

    // Init parts
    var cube = new Geometry('cube', [0, 0, 0], CubeModel);
    let transX = document.getElementById('obj-trans-x');
    transX.addEventListener('input', function() {
        cube.translateX(transX.value);
        scene.render();
    });
    let transY = document.getElementById('obj-trans-y');
    transY.addEventListener('input', function() {
        cube.translateY(transY.value);
        scene.render();
    });
    let transZ = document.getElementById('obj-trans-z');
    transZ.addEventListener('input', function() {
        cube.translateZ(transZ.value);
        scene.render();
    });

    // Create tree
    scene.addChild(camera);
    scene.addChild(cube);

    // Render
    scene.render();
}

document.getElementsByTagName('body')[0].onload = async function() {
    var canvas = document.getElementById('gl-canvas');
    canvas.width = screenWidth;
    canvas.height = screenHeight;

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