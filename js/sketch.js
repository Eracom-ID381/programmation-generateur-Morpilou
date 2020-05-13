// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
var timer = 1;
var randomiser = {
  min: 50,
  max: 100
};
var randomSize = {
  min: 130,
  max: 180
};
var colors = ['343,58,85', '23,40,38', '61,16,100', '74,100,89', '44,90,90', '129,47,57'];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB);

}

function draw() {
  var coneSize = random(50, 100);
  // Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    clear();

    draw_all_icecreamballs(randomiser);
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

function draw_all_icecreamballs(randomiser) {
  var x = random(0, 100);
  var y = 0;

  if (x <= 50) {
    for (var i = 0; i < random(0, 3); i = i + 1) {
      draw_circle(width / 2, height / 2 - y, random(randomSize.min, randomSize.max));
      y = y + 100;
    }
  } else {
    draw_circle(width / 2, height / 2 - random(randomiser.min, randomiser.max), random(randomSize.min, randomSize.max));
    draw_circle(width / 2 - random(randomSize.min, randomSize.max) / 2.5, height / 2, random(randomSize.min, randomSize.max));
    draw_circle(width / 2 + random(randomSize.min, randomSize.max) / 2.5, height / 2, random(randomSize.min, randomSize.max));
  }
}

function random_color(colors) {
  var rand = round(random(colors.length - 1));
  var thisColors = colors[rand];
  var splitColors = thisColors.split(",")
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