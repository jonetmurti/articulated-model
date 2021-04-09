export function addSlider(tableId, object, scene) {
    let table = document.getElementById(tableId);
    let id = object.name + '-' + object.id;

    for (const motion of object.dof) {
        switch (motion) {
            case 'trans':
                addTransSlider(table, object, id, motion, scene);
                break;
            
            case 'rot-x':
                // TODO: this.objectMat.rotateX(this.rotation[0]);
                break;

            case 'rot-y':
                // TODO: this.objectMat.rotateX(this.rotation[1]);
                break;

            case 'rot-z':
                // TODO: this.objectMat.rotateX(this.rotation[2]);
                break;

            case 'scale':
                break;
            
            default:
                break;
        }
    }
}

function addTransSlider(table, object, id, type, scene) {
    const newId = id + '-' + type;
    const ids = [newId + '-' + 'x', newId + '-' + 'y', newId + '-' + 'z'];
    const func = ['translateX', 'translateY', 'translateZ'];

    for (let i = 0; i < ids.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = ids[i] + ':';
        let input = document.createElement('input');
        input.type = 'range';
        input.min = -1000;
        input.max = 1000;
        input.value = 0;
        input.id = ids[i];
        input.addEventListener('input', function() {
            object[func[i]](input.value);
            scene.render();
        });
        cell2.appendChild(input);
    }
}

function addRotSlider(table, object, id) {

}