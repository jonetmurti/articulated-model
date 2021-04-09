import {
    initGL,
    initProgram,
    getFile
} from './libs/utils.js';
import {
    screenWidth,
    screenHeight
} from './const/canvas-const.js';
import {
    addSlider
} from './libs/page.js';
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
    var cube1 = new Geometry('cube', [0, 0, 0], CubeModel);
    addSlider('slider-table', cube1, scene);
    var cube2 = new Geometry('cube', [0, 0, 0], CubeModel);
    addSlider('slider-table', cube2, scene);
    var cube3 = new Geometry('cube', [0, 0, 0], CubeModel);
    addSlider('slider-table', cube3, scene);
    var cube4 = new Geometry('cube', [0, 0, 0], CubeModel);
    addSlider('slider-table', cube4, scene);
    var cube5 = new Geometry('cube', [0, 0, 0], CubeModel);
    addSlider('slider-table', cube5, scene);

    // Create tree
    scene.addChild(camera);
    scene.addChild(cube1);
    scene.addChild(cube2);
    scene.addChild(cube3);
    scene.addChild(cube4);
    scene.addChild(cube5);

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