import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

export class SceneController {
    constructor(canvasElement) {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
        this.camera.up.set(0, 0, 1);
        this.camera.position.set(5, 5, 5);
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasElement ? canvasElement : undefined,
            antialias: true,
        });
        this.renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
        this.renderer.setAnimationLoop(this.animate.bind(this));

        this.light = new THREE.AmbientLight('white');
        this.scene.add(this.light);
        this.scene.background = new THREE.Color(0.9, 0.9, 0.9);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.mouseButtons = {
            MIDDLE: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.ROTATE,
        };

        if(!canvasElement) document.body.appendChild(this.renderer.domElement);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    addGridHelper() {
        const gridHelper = new THREE.GridHelper(100, 10);
        gridHelper.rotateX(Math.PI / 2);
        this.scene.add(gridHelper);
        this.render();
    }

    addAxesHelper() {
        const addAxesHelper = new THREE.AxesHelper(2);
        this.scene.add(addAxesHelper);
        this.render();
    }

    addBox() {
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );
        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}