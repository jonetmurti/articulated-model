import Cuboid from './primitives/Cuboid.js';
import HollowCube from './primitives/HollowCube.js';

export let Cannon = {
    name: 'cannon',
    parts: [{
        name: 'shaft',
        position: [0, 0, 0],
        vertices: Cuboid.createVertices(3, 0.25, 0.25),
        normals: Cuboid.createNormals(),
        color: [0, 1, 0],
        dof: ['rot-y', 'rot-x', 'rot-z', 'trans']
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'tube',
        position: [0, 0.6, -1],
        vertices: HollowCube.createVertices(1, 6, 1),
        normals: HollowCube.createNormals(),
        color: [0.5, 0, 1],
        dof: ['rot-x'],
        parentIdx: 0,
        pivot: [0, 1, 1.35]
    }, {
        name: 'lwheel',
        position: [1, 0, 0],
        vertices: Cuboid.createVertices(0.5, 1.5, 1.5),
        normals: Cuboid.createNormals(),
        color: [0.5, 0, 0.5],
        dof: ['rot-x'],
        parentIdx: 0,
        pivot: [0, 0, 0]
    }, {
        name: 'rwheel',
        position: [-1, 0, 0],
        vertices: Cuboid.createVertices(0.5, 1.5, 1.5),
        normals: Cuboid.createNormals(),
        color: [0.5, 0, 0.5],
        dof: ['rot-x'],
        parentIdx: 0,
        pivot: [0, 0, 0]
    }, {
        name: 'hatch',
        position: [0, 0, 3],
        vertices: Cuboid.createVertices(0.9, 0.25, 0.9),
        normals: Cuboid.createNormals(),
        color: [0, 0, 1],
        dof: ['rot-y'],
        parentIdx: 1,
        pivot: [0.4, 0, 0]
    }]
};