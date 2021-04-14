export default class HollowCube {
    static createVertices(length, width, height) {
        const x = length / 2;
        const z = width / 2;
        const y = height / 2;

        return [
            // top outer
            -x, y, -z,
            x, y, -z,
            x, y, z,
            -x, y, -z,
            x, y, z,
            -x, y, z,

            // top inner
            -x/2, y/2, -z,
            x/2, y/2, z,
            x/2, y/2, -z,
            -x/2, y/2, -z,
            -x/2, y/2, z,
            x/2, y/2, z,

            // bottom outer
            -x, -y, -z,
            x, -y, z,
            x, -y, -z,
            -x, -y, -z,
            -x, -y, z,
            x, -y, z,

            // bottom inner
            -x/2, -y/2, -z,
            x/2, -y/2, -z,
            x/2, -y/2, z,
            -x/2, -y/2, -z,
            x/2, -y/2, z,
            -x/2, -y/2, z,

            //front top
            -x, y/2, -z,
            x, y/2, -z,
            x, y, -z,
            x, y, -z,
            -x, y, -z,
            -x, y/2, -z,

            //front bottom
            -x, -y, -z,
            x, -y, -z,
            x, -y/2, -z,
            x, -y/2, -z,
            -x, -y/2, -z,
            -x, -y, -z,

            //front right
            x/2, -y, -z,
            x, -y, -z,
            x, y, -z,
            x, y, -z,
            x/2, y, -z,
            x/2, -y, -z,

            //front left
            -x, -y, -z,
            -x/2, -y, -z,
            -x/2, y, -z,
            -x/2, y, -z,
            -x, y, -z,
            -x, -y, -z,

            //back top
            -x, y/2, z,
            x, y, z,
            x, y/2, z,
            x, y, z,
            -x, y/2, z,
            -x, y, z,

            //back bottom
            -x, -y, z,
            x, -y/2, z,
            x, -y, z,
            x, -y/2, z,
            -x, -y, z,
            -x, -y/2, z,

            //back right
            x/2, -y, z,
            x, y, z,
            x, -y, z,
            x, y, z,
            x/2, -y, z,
            x/2, y, z,

            //back left
            -x, -y, z,
            -x/2, y, z,
            -x/2, -y, z,
            -x/2, y, z,
            -x, -y, z,
            -x, y, z,
            
            // right outer
            x, -y, -z,
            x, -y, z,
            x, y, z,
            x, -y, -z,
            x, y, z,
            x, y, -z,

            // right inner
            x/2, -y/2, -z,
            x/2, y/2, z,
            x/2, -y/2, z,
            x/2, -y/2, -z,
            x/2, y/2, -z,
            x/2, y/2, z,

            // left outer
            -x, -y, -z,
            -x, y, z,
            -x, -y, z,
            -x, -y, -z,
            -x, y, -z,
            -x, y, z,

            // left inner
            -x/2, -y/2, -z,
            -x/2, -y/2, z,
            -x/2, y/2, z,
            -x/2, -y/2, -z,
            -x/2, y/2, z,
            -x/2, y/2, -z
        ];
    }

    static createNormals() {
        return [
            // top outer
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // top inner
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            // bottom outer
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            // bottom inner
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // front top
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // front bottom
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // front right
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // front left
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // back top
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // back bottom
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // back right
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // back left
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // right outer
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            // right inner
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            // left outer
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            // left inner
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0
        ];
    }
}