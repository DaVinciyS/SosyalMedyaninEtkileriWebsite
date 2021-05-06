/*window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
  if(key.keyCode == "81"){
    var element = document.getElementById("PBone_popup");
    element.classList.toggle("PBone_popupAfter");
  }

}*/
function TopScroll(){
  window.scrollTo(0, 0);

  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}

function MoreReadOne() {
  var element = document.getElementById("");
  element.classList.toggle("");
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

TopScroll();

