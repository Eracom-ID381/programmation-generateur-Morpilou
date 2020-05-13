// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let randomiser = {
  min: 50,
  max: 100
};
var colors = ['343,58,85', '23,40,38', '61,16,100'];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB);

}

function draw() {

  // Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    clear();
    // Appel de notre fonction generator
    random_color(colors);

    draw_circle(width / 2, height / 2 - random(randomiser.min, randomiser.max), random(100, 200));
    draw_circle(width / 2 - random(randomiser.min, randomiser.max), height / 2, random(100, 200));
    draw_circle(width / 2 + random(randomiser.min, randomiser.max), height / 2, random(100, 200));

  }

}

// Fonction avec quatres paramètres
function draw_circle(x, y, size) {
  random_color(colors);
  // fill utilise le paramètre de notre fonction
  circle(x, y, size);
}

function random_color(colors) {
  var rand = round(random(colors.length - 1));
  var thisColors = colors[rand];
  let splitColors = thisColors.split(",")
  fill(splitColors[0], splitColors[1], splitColors[2]);
}

function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}