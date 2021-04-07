export function degToRad(deg) {
    /*
        convert degree to radian
    */
    return deg * Math.PI / 180;
}

export function initGL(canvas) {
    let gl = canvas.getContext('webgl');

    if (!gl) {
        alert('Your browser does not support webgl');
        return null;
    }

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    return gl;
}

export function initProgram(gl, vert, frag) {
    let vertShader = gl.createShader(gl.VERTEX_SHADER);
    let fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertShader, vert);
    gl.shaderSource(fragShader, frag);

    gl.compileShader(vertShader);
    if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
        console.log("failed to compile vertex shader, ", gl.getShaderInfoLog(vertShader));
        return null;
    }

    gl.compileShader(fragShader);
    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        console.log("failed to compile fragment shader, ", gl.getShaderInfoLog(fragShader));
        return null;
    }

    let program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log("failed to link program : ", gl.getProgramInfoLog(program));
        return null;
    }

    return program;
}

export function getFile(url) {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url);
        xmlhttp.onload = function() {
            if (xmlhttp.status == 200) {
                resolve(xmlhttp.response);
            } else {
                reject('ERROR: Cannot get file from ' + url);
            }
        }
        xmlhttp.send();
    });
}