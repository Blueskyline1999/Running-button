/*in order for this script to work,
 you must create your button inside a div element with an id
 The div element can have any id
set button id to "runaway" and that's it!
*/
function createWrapper(buttonClass, divId){
  buton = document.querySelector(buttonClass);
  var coord = buton.getBoundingClientRect();
  wrap = document.createElement("div");
  buton.style.top = 15 + "px";
  buton.style.left = 15 + "px";
  wrap.style.position = "absolute";
  wrap.style.width = (buton.offsetWidth + 30) + "px";
  wrap.style.height = (buton.offsetHeight + 30) + "px";
  wrap.style.top = coord.top  + 10 + "px";
  wrap.style.left = coord.left + 10 + "px";
  buton.parentNode.appendChild(wrap);
  wrap.id = divId;
  wrap.appendChild(buton);
  }

window.onload= function(){
var x;
var y;
var parent;
var check = false;
var wrapId = "something";
var wrap;
parent = document.querySelector(".runaway");
createWrapper(".runaway", wrapId);
wrap = document.getElementById(wrapId);
var coord2 = wrap.getBoundingClientRect();
var xBut = coord2.left;
var yBut = coord2.top;
var width = wrap.offsetWidth;
var height = wrap.offsetHeight
  wrap.onmousemove = function(event){
    //get mouse coord
    x = event.clientX;
    y = event.clientY;
    //run the function
    runBut();
  }
  parent.onclick = function() {
	alert("done that");
  }

  parent.onmouseover = function(){
    magic();
  }
  function magic(){
    if (xBut > -10 && yBut >-10) {
    wrap.style.top = yBut + 60 + "px";
    wrap.style.left = xBut + 40 + "px";
  }
  }
  function runBut(){
    //check if the mouse is on top
    if ( (yBut + 10) - y > 0 ) {
      wrap.style.top = yBut + 10 + "px";
      yBut = yBut + 10;
    }
    //check if the mouse is left
    if ( (xBut + 10) - x > 0 ) {
      wrap.style.left = xBut + 10 + "px";
      xBut = xBut + 10;
    }
    //check if the mouse is right
    if ( x - (xBut + width - 10) > 0 ) {
      if (xBut > -10 ) {
      wrap.style.left = xBut - 10 + "px";
      xBut = xBut - 10;
      }
    }
    //check if the mouse is below
    if ( y - (yBut + height - 10) > 0 ) {
      if (yBut > -10) {
      wrap.style.top = yBut - 10 + "px";
      yBut = yBut - 10;
      }
    }
  }
}
