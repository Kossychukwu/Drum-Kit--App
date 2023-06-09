
//to check button
var btn = document.querySelectorAll(".drum");

for (var i = 0; i < btn.length; i++){

btn[i].addEventListener('click', function(){
    var btnElement = this.innerHTML;
    makeSound(btnElement);
    addAnimation(btnElement);

})
} 

//check keyboard pressed
document.addEventListener("keydown", function(e){
   var key =  e.key;
   makeSound(key);
   addAnimation(key);
})

//to make sound
function makeSound(key) {
    
switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;    
        
        default: console.log(btnElement) 
        break;
}
}

//for animation

function addAnimation(currentkey){
 var activeKey = document.querySelector("." + currentkey);
 activeKey.classList.add("pressed");

 setTimeout(function(){
    activeKey.classList.remove("pressed")
 }, 100);
}