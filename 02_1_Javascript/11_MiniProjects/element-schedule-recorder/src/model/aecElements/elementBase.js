
/**
 * 각 부재 (Column, Beam, Slab, Wall, Foundation)의 공통 속성을 정의한 클래스
 */
export class ElementBase {
    /**
     * ElementBase 생성자
     * @param {'Slab'|'Wall'|'Foundation'|'Beam'|'Column'} elementType 해당 부재의 종류
     * @param {Date} scheduledDate 
     * @param {Date} actualDate 
     */
    constructor(elementType, scheduledDate, actualDate) {
        this.elementType = elementType;
        this.scheduledDate = scheduledDate;
        this.actualDate = actualDate;
    }
}