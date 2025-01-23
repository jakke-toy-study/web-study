import { AppController } from "./app/appController";
import onSelectElementType from "./api/dom/selectionHandler";
import onSubmitData from "./api/dom/onSubmit";

// App initialization
const canvasElement = document.getElementById('three-viewport');
AppController.initialize(canvasElement);

// Scene initialization
AppController.getInstance().sceneController.addBox()
AppController.getInstance().sceneController.addGridHelper(); 
AppController.getInstance().sceneController.addAxesHelper(); 

// Add event listeners
document.getElementById('selector-elementType').addEventListener('change', onSelectElementType);
document.getElementById('add-element').addEventListener('click', onSubmitData);