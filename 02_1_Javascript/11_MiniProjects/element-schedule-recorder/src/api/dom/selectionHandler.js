/**
 * 
 * @param {Event} e 
 */
export default function onSelectElementType(e) {
    switch(e.target.value) {
        case 'column':
            console.log('Column');
            showColumnOptions();
            break;
        case 'beam':
            console.log('Beam');
            showBeamOptions();
            break;
        case 'slab':
            console.log('Slab');
            showSlabOptions();
            break;
        case 'wall':
            console.log('Wall');
            showWallOptions();
            break;
        case 'foundation':
            console.log('Foundation');
            showFoundationOptions();
            break;
    }
    document.getElementById('element-options')
}

function showColumnOptions() {
    const parentContainer = document.getElementById('element-options');

    const container = document.createElement('div');

    const sections = [
        { label: '좌표', inputs: [{ label: 'X: ', width: '48px' , id: 'col-point-x'}, { label: 'Y: ', width: '48px', id: 'col-point-y'}] },
        { label: '레벨', inputs: [{ label: '상단: ', width: '48px', id: 'col-level-top'}, { label: '하단: ', width: '48px', id: 'col-level-bottom' }] },
        { label: '규격', inputs: [{ label: '폭: ', width: '48px', id: 'col-dim-width'}, { label: '하단: ', width: '48px', id: 'col-dim-height'}] }
    ];

    sections.forEach(section => {
        const sectionLabel = document.createElement('div');
        sectionLabel.textContent = section.label;
        container.appendChild(sectionLabel);

        const inputContainer = document.createElement('div');
        section.inputs.forEach(input => {
            const span = document.createElement('span');
            span.textContent = input.label;
            inputContainer.appendChild(span);

            const inputElement = document.createElement('input');
            inputElement.style.width = input.width;
            inputElement.id = input.id;
            inputContainer.appendChild(inputElement);
        });
        container.appendChild(inputContainer);
    });

    parentContainer.replaceChildren(container);
}

function showBeamOptions() {
    const parentContainer = document.getElementById('element-options');

    const container = document.createElement('div');

    const sections = [
        { label: '시작점', inputs: [{ label: 'X: ', width: '48px', id: 'beam-start-x' }, { label: 'Y: ', width: '48px', id: 'beam-start-y' }] },
        { label: '끝점', inputs: [{ label: 'X: ', width: '48px', id: 'beam-end-x' }, { label: 'Y: ', width: '48px', id: 'beam-end-y' }] },
        { label: '중심점', inputs: [{ label: '레벨: ', width: '48px', id: 'beam-center-level' }] },
        { label: '단면 규격', inputs: [{ label: '가로: ', width: '48px', id: 'beam-dim-width' }, { label: '세로: ', width: '48px', id: 'beam-dim-height' }] }
    ];

    sections.forEach(section => {
        const sectionLabel = document.createElement('div');
        sectionLabel.textContent = section.label;
        container.appendChild(sectionLabel);

        const inputContainer = document.createElement('div');
        section.inputs.forEach(input => {
            const span = document.createElement('span');
            span.textContent = input.label;
            inputContainer.appendChild(span);

            const inputElement = document.createElement('input');
            inputElement.style.width = input.width;
            inputElement.id = input.id;
            inputContainer.appendChild(inputElement);
        });
        container.appendChild(inputContainer);
    });

    parentContainer.replaceChildren(container);
}

function showSlabOptions() {
    const parentContainer = document.getElementById('element-options');

    const container = document.createElement('div');

    const sections = [
        { label: '좌측 하단', inputs: [{ label: 'X: ', width: '48px', id: 'slab-bottom-left-x' }, { label: 'Y: ', width: '48px', id: 'slab-bottom-left-y' }] },
        { label: '우측 상단', inputs: [{ label: 'X: ', width: '48px', id: 'slab-top-right-x' }, { label: 'Y: ', width: '48px', id: 'slab-top-right-y' }] },
        { label: '상단 레벨', inputs: [{ label: '값: ', width: '48px', id: 'slab-top-level' }] },
    ];

    sections.forEach(section => {
        const sectionLabel = document.createElement('div');
        sectionLabel.textContent = section.label;
        container.appendChild(sectionLabel);

        const inputContainer = document.createElement('div');
        section.inputs.forEach(input => {
            const span = document.createElement('span');
            span.textContent = input.label;
            inputContainer.appendChild(span);

            const inputElement = document.createElement('input');
            inputElement.style.width = input.width;
            inputElement.id = input.id;
            inputContainer.appendChild(inputElement);
        });
        container.appendChild(inputContainer);
    });

    parentContainer.replaceChildren(container);
}

function showWallOptions() {
    const parentContainer = document.getElementById('element-options');

    const container = document.createElement('div');

    const sections = [
        { label: '시작점', inputs: [{ label: 'X: ', width: '48px', id: 'wall-start-x' }, { label: 'Y: ', width: '48px', id: 'wall-start-y' }] },
        { label: '끝점', inputs: [{ label: 'X: ', width: '48px', id: 'wall-end-x' }, { label: 'Y: ', width: '48px', id: 'wall-end-y' }] },
        { label: '레벨들', inputs: [{ label: '상단: ', width: '48px', id: 'wall-level-top' }, { label: '하단: ', width: '48px', id: 'wall-level-bottom' }] },
        { label: '규격', inputs: [{ label: '두께: ', width: '48px', id: 'wall-thickness' }] },
    ];

    sections.forEach(section => {
        const sectionLabel = document.createElement('div');
        sectionLabel.textContent = section.label;
        container.appendChild(sectionLabel);

        const inputContainer = document.createElement('div');
        section.inputs.forEach(input => {
            const span = document.createElement('span');
            span.textContent = input.label;
            inputContainer.appendChild(span);

            const inputElement = document.createElement('input');
            inputElement.style.width = input.width;
            inputElement.id = input.id;
            inputContainer.appendChild(inputElement);
        });
        container.appendChild(inputContainer);
    });

    parentContainer.replaceChildren(container);
}

function showFoundationOptions() {
    const parentContainer = document.getElementById('element-options');

    const container = document.createElement('div');

    const sections = [
        { label: '위치', inputs: [{ label: 'X: ', width: '48px', id: 'foundation-x' }, { label: 'Y: ', width: '48px', id: 'foundation-y' }] },
        { label: '레벨', inputs: [{ label: '기초 하단: ', width: '48px', id: 'foundation-bottom-level' }, { label: '기초 상단: ', width: '48px', id: 'foundation-top-level' }] },
        { label: '규격', inputs: [{ label: '폭: ', width: '48px', id: 'foundation-width' }, { label: '높이: ', width: '48px', id: 'foundation-height' }] },
    ];

    sections.forEach(section => {
        const sectionLabel = document.createElement('div');
        sectionLabel.textContent = section.label;
        container.appendChild(sectionLabel);

        const inputContainer = document.createElement('div');
        section.inputs.forEach(input => {
            const span = document.createElement('span');
            span.textContent = input.label;
            inputContainer.appendChild(span);

            const inputElement = document.createElement('input');
            inputElement.style.width = input.width;
            inputElement.id = input.id;
            inputContainer.appendChild(inputElement);
        });
        container.appendChild(inputContainer);
    });

    parentContainer.replaceChildren(container);
}