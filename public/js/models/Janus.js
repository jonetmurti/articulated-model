import Cuboid from './primitives/Cuboid.js';
import Trapezoid from './primitives/Trapezoid.js';
import HollowCube from './primitives/HollowCube.js';

export let JanusModel = {
    name: 'janus',
    parts: [{
        name: 'stomach',
        position: [0, 0, 0],
        vertices: Cuboid.createVertices(2, 1, 1),
        normals: Cuboid.createNormals(),
        color: [1, 0.5, 0.3],
        dof: ['rot-y', 'rot-x', 'rot-z', 'trans'],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'upper-left-leg',
        position: [0.6, -1.5, 0],
        vertices: Cuboid.createVertices(0.8, 0.8, 2),
        normals: Cuboid.createNormals(),
        color: [0.5, 1, 0.3],
        dof: ['rot-x', 'rot-z', 'rot-y'],
        parentIdx: 0,
        pivot: [0, 1, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'upper-right-leg',
        position: [-0.6, -1.5, 0],
        vertices: Cuboid.createVertices(0.8, 0.8, 2),
        normals: Cuboid.createNormals(),
        color: [0.5, 1, 0.3],
        dof: ['rot-x', 'rot-z', 'rot-y'],
        parentIdx: 0,
        pivot: [0, 1, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'lower-left-leg',
        position: [0, -2, 0],
        vertices: Trapezoid.createVertices(0.8, 0.8, 0.4, 0.4, 2),
        normals: Trapezoid.createNormals(0.8, 0.8, 0.4, 0.4, 2),
        color: [0.3, 0.5, 1],
        dof: ['rot-x'],
        parentIdx: 1,
        pivot: [0, 1, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'lower-right-leg',
        position: [0, -2, 0],
        vertices: Trapezoid.createVertices(0.8, 0.8, 0.4, 0.4, 2),
        normals: Trapezoid.createNormals(0.8, 0.8, 0.4, 0.4, 2),
        color: [0.3, 0.5, 1],
        dof: ['rot-x'],
        parentIdx: 2,
        pivot: [0, 1, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'left-foot',
        position: [0, -1.1, -0.2],
        vertices: Cuboid.createVertices(0.8, 1.2, 0.2),
        normals: Cuboid.createNormals(),
        color: [0, 0, 0],
        dof: ['rot-x'],
        parentIdx: 3,
        pivot: [0, 0.1, 0.2],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'right-foot',
        position: [0, -1.1, -0.2],
        vertices: Cuboid.createVertices(0.8, 1.2, 0.2),
        normals: Cuboid.createNormals(),
        color: [0, 0, 0],
        dof: ['rot-x'],
        parentIdx: 4,
        pivot: [0, 0.1, 0.2],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'chest',
        position: [0, 1.5, 0],
        vertices: Trapezoid.createVertices(2.5, 1.5, 2, 1, 2),
        normals: Trapezoid.createNormals(2.5, 1.5, 2, 1, 2),
        color: [0.3, 0.5, 1],
        dof: ['rot-y'],
        parentIdx: 0,
        pivot: [0, 0, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'left-shoulder',
        position: [1.75, 0.75, 0],
        vertices: Cuboid.createVertices(1, 1, 1),
        normals: Cuboid.createNormals(),
        color: [1, 0.5, 0.3],
        dof: ['rot-z', 'rot-x'],
        parentIdx: 7,
        pivot: [-0.5, 0, 0],
        texture: {
            on: false   
        }
    }, {
        name: 'right-shoulder',
        position: [-1.75, 0.75, 0],
        vertices: Cuboid.createVertices(1, 1, 1),
        normals: Cuboid.createNormals(),
        color: [1, 0.5, 0.3],
        dof: ['rot-z', 'rot-x'],
        parentIdx: 7,
        pivot: [0.5, 0, 0],
        texture: {
            on: false   
        }
    }, {
        name: 'upper-left-arm',
        position: [0, -1.25, 0],
        vertices: Cuboid.createVertices(0.6, 0.6, 1.5),
        normals: Cuboid.createNormals(),
        color: [0.5, 1, 0.3],
        dof: [],
        parentIdx: 8,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'upper-right-arm',
        position: [0, -1.25, 0],
        vertices: Cuboid.createVertices(0.6, 0.6, 1.5),
        normals: Cuboid.createNormals(),
        color: [0.5, 1, 0.3],
        dof: [],
        parentIdx: 9,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'lower-left-arm',
        position: [0, -1.65, 0],
        vertices: Trapezoid.createVertices(0.6, 0.6, 0.3, 0.3, 1.8),
        normals: Trapezoid.createNormals(0.6, 0.6, 0.3, 0.3, 1.8),
        color: [0.3, 0.5, 1],
        dof: ['rot-x'],
        parentIdx: 10,
        pivot: [0, 0.9, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'lower-right-arm',
        position: [0, -1.65, 0],
        vertices: Trapezoid.createVertices(0.6, 0.6, 0.3, 0.3, 1.8),
        normals: Trapezoid.createNormals(0.6, 0.6, 0.3, 0.3, 1.8),
        color: [0.3, 0.5, 1],
        dof: ['rot-x'],
        parentIdx: 11,
        pivot: [0, 0.9, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'outer-head',
        position: [0, 1.625, 0],
        vertices: HollowCube.createVertices(1.25, 1.25, 1.25),
        normals: HollowCube.createNormals(),
        color: [1, 0, 0],
        dof: ['rot-x', 'rot-y'],
        parentIdx: 7,
        pivot: [0, -0.625, 0],
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'inner-head',
        position: [0, 0, 0],
        vertices: Cuboid.createVertices(0.625, 1.25, 0.625),
        normals: Cuboid.createNormals(),
        color: [1, 1, 0],
        dof: [],
        parentIdx: 14,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'left-ear',
        position: [0.675, 0, 0],
        vertices: Cuboid.createVertices(0.1, 0.5, 0.5),
        normals: Cuboid.createNormals(),
        color: [0.46, 0.46, 0.46],
        dof: [],
        parentIdx: 14,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'right-ear',
        position: [-0.675, 0, 0],
        vertices: Cuboid.createVertices(0.1, 0.5, 0.5),
        normals: Cuboid.createNormals(),
        color: [0.46, 0.46, 0.46],
        dof: [],
        parentIdx: 14,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'left-antenna',
        position: [0, 0.75, 0],
        vertices: Cuboid.createVertices(0.1, 0.1, 1),
        normals: Cuboid.createNormals(),
        color: [0, 0, 0],
        dof: [],
        parentIdx: 16,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }, {
        name: 'right-antenna',
        position: [0, 0.75, 0],
        vertices: Cuboid.createVertices(0.1, 0.1, 1),
        normals: Cuboid.createNormals(),
        color: [0, 0, 0],
        dof: [],
        parentIdx: 17,
        texture: {
            on: false   
        }
        // optional:
        /*
            parentIdx: null
            pivot: [0, 1, 0]
        */
    }]
};