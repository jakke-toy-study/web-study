import { Point2d } from "../../basicTypes/point2d";
import { ElementBase } from "../elementBase";

/**
 * 보를 나타내는 클래스
 */
export class ElementBeam extends ElementBase {
    /**
     * 보 생성자
     * @param {Date} scheduledDate 계획된 일정
     * @param {Date} actualDate 실제 일정
     * @param {Point2d} startPt 시작점
     * @param {Point2d} endPt 끝점
     * @param {number} centerLevel 중심점 
     * @param {{width: number, height: number}} dimension 보의 폭
     */
    constructor(scheduledDate, actualDate, startPt, endPt, centerLevel, dimension) {
        super("Beam", scheduledDate, actualDate);
        this.startPt = startPt;
        this.endPt = endPt;
        this.centerLevel = centerLevel;
        this.dimension = dimension;
    }
}