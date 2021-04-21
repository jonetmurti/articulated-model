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
    addSlider,
    setRowDisplay
} from './libs/page.js';
import Scene from './classes/Scene.js';
import Camera from './classes/cameras/Camera.js';
import BlinnPhong from './classes/lights/BlinnPhong.js';
import { CubeModel } from './models/Cube.js';
import { Cannon } from './models/Cannon.js';
import { JanusModel } from './models/Janus.js';
import Limb from './classes/parts/Limb.js';

var models = [Cannon, JanusModel];
var modelEnum = {
    'cannon': 0,
    'janus': 1
}

function main(gl, ...programs) {
    if (programs.length == 0)
        throw 'ERROR: No program provided';

    // Init scene
    var scene = new Scene('main', gl, programs[0]);

    // Init camera
    var camera = new Camera('camera', [0, 0, 0]);
    scene.addChild(camera);
    let camTranSlider = document.getElementById('cam-trans');
    camera.setTransZ(camTranSlider.value);
    camTranSlider.addEventListener('input', function() {
        camera.setTransZ(camTranSlider.value);
        scene.render();
    });


    // Init light
    var light = new BlinnPhong('blinn-phong', [-1, 1, -1], camera);
    scene.addChild(light);

    // Init parts
    var objects = [];
    var sliders = [];
    for (const model of models) {
        // TODO: add isActive setter
        let nodes = [];
        let partSliders = [];
        for (let i = 0; i < model.parts.length; i++) {
            let limb = new Limb(model.parts[i]);
            nodes.push(limb);
            partSliders  = partSliders.concat(addSlider('slider-table', limb, scene));
            if (i == 0) {
                scene.addChild(limb);
                objects.push(limb);
            }
        }
        sliders.push(partSliders);

        for (let i = 0; i < nodes.length; i++) {
            if (model.parts[i].parentIdx != null) {
                nodes[model.parts[i].parentIdx].addChild(nodes[i]);
                nodes[i].setParentMat(nodes[model.parts[i].parentIdx].objectMat);
            }
        }
    }

    for (let i = 1; i < models.length; i++) {
        objects[i].isActive = false;     
        setRowDisplay(sliders[i], 'none');   
    }

    // event listeners
    let objectSelect = document.getElementById('object-select');
    objectSelect.addEventListener('change', function() {
        const idx = modelEnum[objectSelect.value];

        objects[idx].isActive = true;
        setRowDisplay(sliders[idx], '');
        
        for (let i = 0; i < models.length; i++) {
            if (i != idx) {
                objects[i].isActive = false;
                setRowDisplay(sliders[i], 'none');
            }
        }

        scene.render();
    });

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
        // const vert = await getFile('shaders/vertex.glsl');
        // const frag = await getFile('shaders/fragment.glsl');
        // const ftext = await getFile('shaders/ftexture.glsl');
        // const vtext = await getFile('shaders/vtexture.glsl');
        const lightVert = await getFile('shaders/vlight.glsl');
        const lightFrag = await getFile('shaders/flight.glsl');
        const program = initProgram(gl, lightVert, lightFrag /*vert, frag, vtext, ftext*/);
        main(gl, program);
    } catch(err) {
        console.error(err);
    }
};