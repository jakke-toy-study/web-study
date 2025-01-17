// const myInfo = {
//     name: "Jake",
//     birthDay: "11-18",
//     location: "Seoul",
//     action: () => console.log(""),
//     schoolHistory: [""]
// }

// console.log(myInfo.action());

export class ConstructionElement {
    constructor(elementType, plannedDate, actualDate, id) {
        this.elementType = elementType;
        this.plannedDate = plannedDate;
        this.actualDate = actualDate;
        this.id = id;
    }

    getDelay() {
        return ((this.actualDate - this.plannedDate) / this.plannedDate )*100;
    }
}

export class SlabElement extends ConstructionElement {
    constructor(plannedDate, actualDate, width, height, id) {
        const slabId = `slab-${id}`;
        super("Slab", plannedDate, actualDate, slabId)
        this.width = width;
        this.height = height;
    }

    getSlabArea() {
        return this.width * this.height;
    }
}

export class ColumnElement extends ConstructionElement {
    constructor(plannedDate, actualDate, height, id) {
        const colId = `col-${id}`;
        super("Column", plannedDate, actualDate, colId)
        this.height = height;
    }

    getHeight() {
        return this.height;
    }
}

export class BeamElement extends ConstructionElement {
    constructor(plannedDate, actualDate, id) {
        const beamId = `beamId-${id}`;
        super("Beam", plannedDate, actualDate, beamId);
    }
}

// 실제 실행할 코드
// 기둥 만들기
const elements = [];
for(let i = 0; i < 10; i++) {
    const column = new ColumnElement(7, 21, 10, i);
    elements.push(column);
}

// 보 만들기
for(let i = 0; i < 10; i++) {
    const beam = new BeamElement(7, 21, i);
    elements.push(beam);
}

// 슬래브 만들기
for(let i = 0; i < 10; i++) {
    const slab = new SlabElement(7, 21, 5, 5, i);
    elements.push(slab);
}

// 평균 지연율 계산하기
let delaySum = 0;
let elementCount = elements.length;
for(const element of elements) {
    delaySum += element.getDelay();
}

const averageDelay = delaySum / elementCount;
console.log(`평균 지연율 : ${averageDelay}%`);