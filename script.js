console.log(this === window);
// returns true


function checkThis(){
  console.log(this);
}
checkThis();
// outputs window object


function checkThis(){
  'use strict';
  console.log(this);
}
checkThis();
// outputs "undefined"


function Chair(style, color) {
  console.log(this);
  this.style = style;
  this.color = color;
}
var sofa = new Chair("sofa", "green");


var couch = {
  color: 'green',
  f: function() {
    return this;
  }
};
 
console.log(couch.f());
// outputs object