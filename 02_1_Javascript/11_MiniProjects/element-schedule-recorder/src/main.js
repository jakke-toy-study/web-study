import { AppController } from "./app/appController";

// App initialization
const canvasElement = document.getElementById('three-viewport');
AppController.initialize(canvasElement);

// Scene initialization
AppController.getInstance().sceneController.addBox(); 
AppController.getInstance().sceneController.addGridHelper(); 
AppController.getInstance().sceneController.addAxesHelper(); 