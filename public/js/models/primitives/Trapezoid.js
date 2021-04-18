export default class Trapezoid {
    static createVertices(upperLength, upperWidth, lowerLength, lowerWidth, height) {
        const upperX = upperLength / 2;
        const upperZ = upperWidth / 2;
        const lowerX = lowerLength / 2;
        const lowerZ = lowerWidth / 2;
        const y = height / 2;

        return [
            // top
            -upperX, y, -upperZ,
            upperX, y, -upperZ,
            upperX, y, upperZ,
            -upperX, y, -upperZ,
            upperX, y, upperZ,
            -upperX, y, upperZ,

            // bottom
            -lowerX, -y, -lowerZ,
            lowerX, -y, lowerZ,
            lowerX, -y, -lowerZ,
            -lowerX, -y, -lowerZ,
            -lowerX, -y, lowerZ,
            lowerX, -y, lowerZ,

            //front
            -lowerX, -y, -lowerZ,
            lowerX, -y, -lowerZ,
            upperX, y, -upperZ,
            upperX, y, -upperZ,
            -upperX, y, -upperZ,
            -lowerX, -y, -lowerZ,

            //back
            -lowerX, -y, lowerZ,
            upperX, y, upperZ,
            lowerX, -y, lowerZ,
            upperX, y, upperZ,
            -lowerX, -y, lowerZ,
            -upperX, y, upperZ,
            
            // right
            lowerX, -y, -lowerZ,
            lowerX, -y, lowerZ,
            upperX, y, upperZ,
            lowerX, -y, -lowerZ,
            upperX, y, upperZ,
            upperX, y, -upperZ,

            // left
            -lowerX, -y, -lowerZ,
            -upperX, y, upperZ,
            -lowerX, -y, lowerZ,
            -lowerX, -y, -lowerZ,
            -upperX, y, -upperZ,
            -upperX, y, upperZ
        ];
    }

    static createNormals(upperLength, upperWidth, lowerLength, lowerWidth, height) {

    }
}