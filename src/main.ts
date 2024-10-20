import { drawTextScreen, engineInit, mainCanvasSize } from "littlejsengine";

// Runs once after the engine starts up, setup the game
const gameInit = () => {};

// Runs every frame at monitor refresh rate, handle input and update the game state
const gameUpdate = () => {};

// Runs after physics and objects are updated, setup camera and prepare for render
const gameUpdatePost = () => {};

// Runs before objects are rendered, draw any background effects that appear behind objects
const gameRender = () => {};

// Runs after objects are rendered, draw effects or hud that appear above all objects
const gameRenderPost = () => {
  drawTextScreen("Hello world", mainCanvasSize.scale(0.5), 80);
};

engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);
