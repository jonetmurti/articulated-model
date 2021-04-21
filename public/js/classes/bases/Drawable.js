import Movable from './Movable.js';
import Transform from './Transform.js';
import { 
    transposeMat
} from '../../libs/matrix.js';

export default class Drawable extends Movable {
    constructor(model) {
        super(model.name, model.position);
        this.vertices = model.vertices;
        this.color = model.color;
        this.normals = model.normals;
        this.dof = model.dof;
        this.pivot = model.pivot;
        this.img = model.img;  
        this.objectMat = new Transform();
        this.parentMat = null;
        if (new.target === Drawable) {
            throw new TypeError("Cannot construct Drawable instances directly");
        }
    }

    setParentMat(parentMat) {
        this.parentMat = parentMat;
    }

    transform() {
        this.objectMat.reset();

        if (this.pivot)
            this.objectMat.translate(this.pivot, -1);

        for (const motion of this.dof) {
            switch (motion) {
                case 'trans':
                    this.objectMat.translate(this.translation);
                    break;
                
                case 'rot-x':
                    this.objectMat.rotateX(this.rotation[0]);
                    break;

                case 'rot-y':
                    this.objectMat.rotateY(this.rotation[1]);
                    break;

                case 'rot-z':
                    this.objectMat.rotateZ(this.rotation[2]);
                    break;

                case 'scale':
                    // this.objectMat.scale(k);
                    break;
                
                default:
                    break;
            }
        }

        if (this.pivot)
            this.objectMat.translate(this.pivot);

        this.objectMat.translate(this.position);
        if (this.parentMat) {
            this.objectMat.multiply(this.parentMat);
        }
    }

    loadTexture(gl, url) {
        function isPowerOf2(value) {
            return (value & (value - 1)) == 0;
          }
        const texture = gl.createTexture();
        if(url !== undefined){
            gl.bindTexture(gl.TEXTURE_2D, texture);
          
            // Because images have to be downloaded over the internet
            // they might take a moment until they are ready.
            // Until then put a single pixel in the texture so we can
            // use it immediately. When the image has finished downloading
            // we'll update the texture with the contents of the image.
            const level = 0;
            const internalFormat = gl.RGB;
            const width = 1;
            const height = 1;
            const border = 0;
            const srcFormat = gl.RGB;
            const srcType = gl.UNSIGNED_BYTE;
            const pixel = new Uint8Array(this.color);
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                          width, height, border, srcFormat, srcType,
                          pixel);
          
            const image = new Image();
            image.onload = function() {
              gl.bindTexture(gl.TEXTURE_2D, texture);
              gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                            srcFormat, srcType, image);
          
              // WebGL1 has different requirements for power of 2 images
              // vs non power of 2 images so check if the image is a
              // power of 2 in both dimensions.
              if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
                 // Yes, it's a power of 2. Generate mips.
                 gl.generateMipmap(gl.TEXTURE_2D);
              } else {
                 // No, it's not a power of 2. Turn off mips and set
                 // wrapping to clamp to edge
                 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              }
            };
            image.src = url;
          
            return texture;
        }
        else return texture;
      }
      

    render(gl, program) {
        const matrix = transposeMat(this.objectMat.matrix);

        // TODO: consider normal, color, and texture?
        let buffer = gl.createBuffer();
        let normalBuf = gl.createBuffer();
        const positionLoc = gl.getAttribLocation(program, 'vertPos');
        const vertNormalLoc = gl.getAttribLocation(program, 'vertNormal');
        const objMatLoc = gl.getUniformLocation(program, 'objMat');
        const colorLoc = gl.getUniformLocation(program, 'color');

        // Texture stuff
        const textureLoc = gl.getUniformLocation(program, 'aTextureCoord');
        const uSampler = gl.getUniformLocation(program, 'uSampler');

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);   
        gl.vertexAttribPointer(
            positionLoc,
            3,
            gl.FLOAT,
            gl.FALSE,
            3 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(positionLoc);

        // Vector normal stuff
        gl.bindBuffer(gl.ARRAY_BUFFER, normalBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);
        gl.vertexAttribPointer(
            vertNormalLoc,
            3,
            gl.FLOAT,
            gl.FALSE,
            3 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(vertNormalLoc);

        gl.uniformMatrix4fv(objMatLoc, false, new Float32Array(matrix));

        gl.uniform3fv(colorLoc, new Float32Array(this.color));

        if(this.img !== undefined){
            const texture = this.loadTexture(gl,this.img);
            
            gl.vertexAttribPointer(
                textureLoc,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );
            gl.enableVertexAttribArray(positionLoc);
            // Tell WebGL we want to affect texture unit 0
            gl.activeTexture(gl.TEXTURE0);

            // Bind the texture to texture unit 0
            gl.bindTexture(gl.TEXTURE_2D, texture);

            // Tell the shader we bound the texture to texture unit 0
            gl.uniform1i(uSampler, 0);
        }
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length/3);

    }
}