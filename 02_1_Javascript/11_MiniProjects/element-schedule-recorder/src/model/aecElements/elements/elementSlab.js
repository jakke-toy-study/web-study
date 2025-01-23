import { Polyline2d } from "../../basicTypes/polyline";

/**
 * 슬래브를 나타내는 클래스
 */
export class ElementSlab extends ElementBase {
    /**
     * 
     * @param {Date} scheduledDate 계획된 일정
     * @param {Date} actualDate 실제 일정
     * @param {Polyline2d} polyline 슬래브 경계선
     * @param {number} thickness 슬래브 두께
     * @param {number} topLevel 슬래브 상단레벨
     */
    constructor(scheduledDate, actualDate, polyline, thickness, topLevel) {
        super("Slab", scheduledDate, actualDate);
        this.polyline = polyline;
        this.thickness = thickness;
        this.topLevel = topLevel;
    }
}