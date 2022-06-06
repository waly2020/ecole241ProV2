const canvas = document.getElementById("tile");
const dessin = canvas.getContext("2d");
const header = document.getElementById("tete");

canvas.width = 320;
canvas.height = header.clientHeight;

let canActive = 0;
let dt = 1,
     g = 1,
     vy = 1,
     vx = 2;

const bloks = document.querySelectorAll(".bloks");

const button = document.getElementById("cta");

const {width,height} = canvas;

let balle = new CercleGameObject(button.offsetLeft + 20,button.offsetTop - 40,12);
balle.color = "orange";
