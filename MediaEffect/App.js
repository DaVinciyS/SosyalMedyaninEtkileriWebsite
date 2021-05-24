/*window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
  if(key.keyCode == "13"){}
}*/
var Texts = [];

var SearchBar = document.getElementById('SearchInpt');
console.log(SearchBar);
SearchBar.addEventListener('keyup', (e) => {
   console.log(e.target.value)
});



function MoreReadFive() {
  var element = document.getElementById("PBFive");
  element.classList.toggle("PBFiveAfter");
}
function MoreReadThree() {
  var element = document.getElementById("PBThird");
  element.classList.toggle("PBThirdAfter");
}
function MoreReadEght(){
  var element = document.getElementById("PBEght");
  element.classList.toggle("PBEghtAfter");
}
function MoreReadTwnty(){
  var element = document.getElementById("PBTwnty");
  element.classList.toggle("PBTwntyAfter");
}
function MoreReadEghten(){
  var element = document.getElementById("PBEghten");
  element.classList.toggle("PBEghtenAfter");
}
function MoreReadSxten(){
  var element = document.getElementById("PBSxten");
  element.classList.toggle("PBSxtenAfter");
}

