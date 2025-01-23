import { Point2d } from "../../basicTypes/point2d";
import { ElementBase } from "../elementBase";

/**
 * 벽체를 나타내는 클래스
 */
export class ElementWall extends ElementBase {
    /**
     * 벽체 생성자
     * @param {Date} scheduledDate 예정된 날짜
     * @param {Date} actualDate 실제 날짜
     * @param {Point2d} startPt 시작점
     * @param {Point2d} endPt 끝점
     * @param {number} thickness 벽체 두께
     * @param {number} base 벽체 하단
     * @param {number} top 벽체 상단
     */
    constructor(scheduledDate, actualDate, startPt, endPt, thickness, base, top) {
        super("Wall", scheduledDate, actualDate);
        this.startPt = startPt;
        this.endPt = endPt;
        this.thickness = thickness;
        this.base = base;
        this.top = top;
    }
}