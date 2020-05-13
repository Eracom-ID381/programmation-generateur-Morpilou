// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let randomiser = {
  min: 50,
  max: 100
};
let coneSize;
var colors = ['343,58,85', '23,40,38', '61,16,100', '74,100,89', '44,90,90', '129,47,57'];
var heights = ['0', '100', '200'];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB);

}

function draw() {
  let coneSize = random(50, 100);
  let y = 0;

  // Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    clear();

    let x = random(0, 10);

    if (x <= 5) {
      for (var i = 0; i < random(0, 3); i = i + 1) {
        draw_circle(width / 2, height / 2 - y, random(100, 200));
        y = y + 100;
      }
    } else {
      draw_circle(width / 2, height / 2 - random(randomiser.min, randomiser.max), random(150, 200));
      draw_circle(width / 2 - random(randomiser.min, randomiser.max), height / 2, random(150, 200));
      draw_circle(width / 2 + random(randomiser.min, randomiser.max), height / 2, random(150, 200));
    }

    // Appel de notre fonction generator

    fill(44, 41, 87);
    iceCone(width / 2 - coneSize, height / 2 + 50, width / 2 + coneSize, height / 2 + 50, width / 2, height / 2 + random(200, 400));


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

function iceCone(x1, y1, x2, y2, x3, y3) {
  triangle(x1, y1, x2, y2, x3, y3)
}

function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}