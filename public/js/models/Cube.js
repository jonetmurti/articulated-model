import Cuboid from './primitives/Cuboid.js';

export let CubeModel = {
    name: 'cube',
    parts: [{
        name: 'cube-1',
        position: [0, 1, 0],
        vertices: Cuboid.createVertices(2, 2, 2),
        normals: Cuboid.createNormals(),
        color: [1, 0.5, 0.3],
        dof: ['rot-y', 'rot-x', 'rot-z', 'trans']
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'cube-2',
        position: [0, -2, 0],
        vertices: Cuboid.createVertices(2, 2, 2),
        normals: Cuboid.createNormals(),
        color: [0.3, 1, 0.5],
        dof: ['rot-y', 'rot-x', 'rot-z', 'trans'],
        parentIdx: 0,
        pivot: [0, 1, -1]
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'cube-3',
        position: [0, -2, 0],
        vertices: Cuboid.createVertices(2, 2, 2),
        normals: Cuboid.createNormals(),
        color: [0.5, 0.3, 1],
        dof: ['rot-y', 'rot-x', 'rot-z', 'trans'],
        parentIdx: 1,
        pivot: [0, 1, 1]
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }]
};