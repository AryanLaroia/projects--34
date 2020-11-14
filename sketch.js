//Create variables here
var dog, happyDog;
var dogImage, happyDogImage;
var database;
var foodS, foodStock;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  var dog = createSprite(200,200,20,20);
  dog.addImage("ok", dogImage);
  dog.scale = 0.1;
}


function draw() {  
background(46,139,87);

if(KeyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}


function readStock(data){
foodS = data.val();
}
function writeStock(x){
database.ref('/').update({
  food : x
})
}