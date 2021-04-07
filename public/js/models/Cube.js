export let CubeModel = {
    name: 'cube',
    vertices: [
        // top
        -1, 1, -1,
        1, 1, -1,
        1, 1, 1,
        -1, 1, -1,
        1, 1, 1,
        -1, 1, 1,

        // bottom
        -1, -1, -1,
        1, -1, 1,
        1, -1, -1,
        -1, -1, -1,
        -1, -1, 1,
        1, -1, 1,

        //front
        -1,-1,-1,
        1,-1,-1,
        1,1,-1,
        1,1,-1,
        -1,1,-1,
        -1,-1,-1,

        //back
        -1,-1,1,
        1,1,1,
        1,-1,1,
        1,1,1,
        -1,-1,1,
        -1,1,1,
        
        // right
        1, -1, -1,
        1, -1, 1,
        1, 1, 1,
        1, -1, -1,
        1, 1, 1,
        1, 1, -1,

        // left
        -1, -1, -1,
        -1, 1, 1,
        -1, -1, 1,
        -1, -1, -1,
        -1, 1, -1,
        -1, 1, 1
    ],
    normals: [
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0
    ],
    colors: []
}