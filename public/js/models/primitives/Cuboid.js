export default class Cuboid {
    static createVertices(length, width, height) {
        const x = length / 2;
        const z = width / 2;
        const y = height / 2;

        return [
            // top
            -x, y, -z,
            x, y, -z,
            x, y, z,
            -x, y, -z,
            x, y, z,
            -x, y, z,

            // bottom
            -x, -y, -z,
            x, -y, z,
            x, -y, -z,
            -x, -y, -z,
            -x, -y, z,
            x, -y, z,

            //front
            -x, -y, -z,
            x, -y, -z,
            x, y, -z,
            x, y, -z,
            -x, y, -z,
            -x, -y, -z,

            //back
            -x, -y, z,
            x, y, z,
            x, -y, z,
            x, y, z,
            -x, -y, z,
            -x, y, z,
            
            // right
            x, -y, -z,
            x, -y, z,
            x, y, z,
            x, -y, -z,
            x, y, z,
            x, y, -z,

            // left
            -x, -y, -z,
            -x, y, z,
            -x, -y, z,
            -x, -y, -z,
            -x, y, -z,
            -x, y, z
        ];
    }

    static createNormals() {
        return [
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
        ];
    }
}