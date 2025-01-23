import { Polyline2d } from "../../basicTypes/polyline";

/**
 * 슬래브를 나타내는 클래스
 */
export class ElementSlab extends ElementBase {
    /**
     * 
     * @param {Date} scheduledDate 계획된 일정
     * @param {Date} actualDate 실제 일정
     * @param {{min: Point2d, max: Point2d}} range 슬래브 범위
     * @param {number} thickness 슬래브 두께
     * @param {number} topLevel 슬래브 상단레벨
     */
    constructor(scheduledDate, actualDate, range, thickness, topLevel) {
        super("Slab", scheduledDate, actualDate);
        this.range = range;
        this.thickness = thickness;
        this.topLevel = topLevel;
    }
}