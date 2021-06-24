var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen


  // Add code to display the end screen


  drawSprites()
}

function clues(){                                                                          
fill("white")
textSize(15)
text("R E V B A I L A")
fill("lightblue")
text("Hint: Always changing,not constant!!",100,70)

fill("white")
textSize(15)
text("A T A D A S B A")
fill("lightblue")
text("Hint: Always changing,not constant!!",100,70)

fill("white")
textSize(15)
text("C U T N I F O N")
fill("lightblue")
text("Hint: Always changing,not constant!!",100,70)


}