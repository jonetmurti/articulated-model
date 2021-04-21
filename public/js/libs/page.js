export function setRowDisplay(rows, display) {
    for (let row of rows) {
        row.style.display = display;
    }
}

export function addSlider(tableId, object, scene) {
    let table = document.getElementById(tableId);

    let objectRows = [];

    for (const motion of object.dof) {
        switch (motion) {
            case 'trans':
                objectRows = objectRows.concat(addTransSlider(table, object, motion, scene));
                break;
            
            case 'scale':
                break;
            
            default:
                objectRows.push(addRotSlider(table, object, motion, scene));
                break;
        }
    }

    return objectRows;
}

function addTransSlider(table, object, type, scene) {
    const id = object.name + '-' + type;
    const ids = [id + '-' + 'x', id + '-' + 'y', id + '-' + 'z'];
    const func = ['setTransX', 'setTransY', 'setTransZ'];

    let rows = [];

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
            scene.render(document.getElementById('texture-switch').checked);
        });
        cell2.appendChild(input);
        rows.push(row);
    }

    return rows;
}

function addRotSlider(table, object, type, scene) {
    const typeMap = {
        'rot-x': 'setRotX',
        'rot-y': 'setRotY',
        'rot-z': 'setRotZ'
    }

    const id = object.name + '-' + type;
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = id + ':';
    let input = document.createElement('input');
    input.type = 'range';
    input.min = -360;
    input.max = 360;
    input.value = 0;
    input.id = id;
    input.addEventListener('input', function() {
        object[typeMap[type]](input.value);
        scene.render(document.getElementById('texture-switch').checked);
    });
    cell2.appendChild(input);

    return row;
}