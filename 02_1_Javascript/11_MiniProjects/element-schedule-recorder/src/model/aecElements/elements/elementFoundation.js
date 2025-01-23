/**
 * 기초를 나타내는 클래스
 */
export class ElementFoundation extends ElementBase {
    /**
     * 기초 생성자
     * @param {Date} scheduledDate 예정된 날짜
     * @param {Date} actualDate 실제 날짜
     * @param {Point2d} location 위치
     * @param {number} bottomLevel 하단 레벨
     * @param {number} topLevel 상단 레벨
     * @param {{width: number, height: number}} dimension 규격 (폭, 높이)
     */
    constructor(scheduledDate, actualDate, location, bottomLevel, topLevel, dimension) {
        super("Foundation", scheduledDate, actualDate);
        this.location = location;
        this.bottomLevel = bottomLevel;
        this.topLevel = topLevel;
        this.dimension = dimension;
    }
}