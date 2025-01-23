import { SceneController } from "../api/three/initializeThree";
import { ElementCollection } from "../model/collections/elementCollections";

/**
 * AppController는 SceneController를 관리하는 클래스입니다.
 * 싱글톤 패턴으로 구현되어 있어, getInstance() 메서드를 통해 인스턴스를 가져올 수 있습니다.
 */
export class AppController {
    static instance;

    /**
     * 캔버스 요소를 넣을 경우, 해당 요소에 three.js의 캔버스가 삽입되며,
     * 캔버스 요소를 넣지 않을 경우, body에 새로운 캔버스 요소가 생성됩니다.
     * @param {HTMLCanvasElement | undefined} canvasElement 캔버스 요소
     */
    constructor(canvasElement) {
        /**
         * @type SceneController
         */
        this.sceneController = new SceneController(canvasElement);

        /**
         * @type ElementCollection
         */
        this.elementCollection = new ElementCollection();
    }

    /**
     * Canvas Element를 받아서 AppController를 초기화합니다.
     * @param {HTMLCanvasElement} canvasElement 캔버스 요소
     */
    static initialize(canvasElement) {
        if (!AppController.instance) {
            AppController.instance = new AppController(canvasElement);
        }
    }

    /**
     * AppController의 인스턴스를 반환합니다.
     * @returns {AppController} 인스턴스
     */
    static getInstance() {
        return AppController.instance;
    }
}