import { ElementBase } from "../elementBase";

/**
 * 기둥을 나타내는 클래스
 */
export class ElementColumn extends ElementBase {
    /**
     * 기둥 생성자
     * @param {Date} scheduledDate 예정된 날짜
     * @param {Date} actualDate 실제 날짜
     * @param {Point2d} location 위치
     * @param {number} bottomLevel 하단 레벨
     * @param {number} topLevel 상단 레벨
     * @param {{width: number, height: number}} dimension 규격 (폭, 높이)
     */
    constructor(scheduledDate, actualDate, location, bottomLevel, topLevel, dimension) {
        super("Column", scheduledDate, actualDate);
        this.location = location;
        this.bottomLevel = bottomLevel;
        this.topLevel = topLevel;
        this.dimension = dimension;
    }
}