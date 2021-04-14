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
import Scene from './classes/Scene.js';
import Camera from './classes/cameras/Camera.js';
import { CubeModel } from './models/Cube.js';
import { Cannon } from './models/Cannon.js';
import Limb from './classes/parts/Limb.js';

var models = [CubeModel];

function main(gl, ...programs) {
    if (programs.length == 0)
        throw 'ERROR: No program provided';

    // Init scene
    var scene = new Scene('main', gl, programs[0]);

    // TODO: Init camera
    var camera = new Camera('camera', [0, 0, 0]);
    scene.addChild(camera);
    let camTranSlider = document.getElementById('cam-trans');
    camTranSlider.addEventListener('input', function() {
        camera.setTransZ(camTranSlider.value);
        scene.render();
    });


    // TODO: Init light

    // Init parts
    for (const model of models) {
        // TODO: add isActive setter
        let nodes = [];
        for (let i = 0; i < model.parts.length; i++) {
            let limb = new Limb(model.parts[i]);
            nodes.push(limb);
            addSlider('slider-table', limb, scene);
            if (i == 0)
                scene.addChild(limb);
        }

        for (let i = 0; i < nodes.length; i++) {
            if (model.parts[i].parentIdx != null) {
                nodes[model.parts[i].parentIdx].addChild(nodes[i]);
                nodes[i].setParentMat(nodes[model.parts[i].parentIdx].objectMat);
            }
        }
    }

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