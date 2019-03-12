

// for button press
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
var innerButton = this.innerHTML;
    makeSound(innerButton);
    buttonAnimation(innerButton);
  });
}
// for key press
document.addEventListener("keypress" ,  function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
} )
function makeSound(key) {
  var innerButton = this.innerHTML;
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:

  }
}
function buttonAnimation(currentkey){
var activeButton= document.querySelector("." + currentkey);
activeButton.classList.add("pressed");
setTimeout(function()
{
  activeButton.classList.remove("pressed");
},100);

}
