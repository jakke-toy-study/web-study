/**
 * 부재들의 집합을 나타내는 클래스
 */
export class ElementCollection {
    constructor() {
        /** @type {ElementBase[]} */
        this.elements = [];
    }

    /**
     * 요소 추가 메서드
     * @param {ElementBase} element 추가할 요소
     */
    addElement(element) {
        this.elements.push(element);
    }
}