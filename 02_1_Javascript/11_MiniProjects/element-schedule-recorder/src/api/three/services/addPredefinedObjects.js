import { ElementColumn } from "../../../model/aecElements/elements/elementColumn";

export class AddPredefinedObjects {
    constructor(sceneController) {
        this.sceneController = sceneController;
    }

    /**
     * 
     * @param {ElementColumn} column 
     */
    addColumn(column) {
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const cylinder = new THREE.Mesh(geometry, material);
        this.sceneController.scene.add(cylinder);
        this.sceneController.render();
    }
}