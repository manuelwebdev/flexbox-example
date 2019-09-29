//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
window.onload = function() {
    var logo = document.getElementById("cozy");
    TweenMax.from(logo, 2, {
      x: 150, 
      ease:Bounce.easeOut});
     
    /* Tip: Try substituting the following eases:
    Elastic.easeIn
    Elastic.easeInout
    Back.easeOut
    Power1.easeOut
    Power2.easeOut
    Power3.easeOut
    Power4.easeOut
    SlowMo.ease
    */   
}
// -----------------------------------------------
$(document).ready(function() {
  $btnElem.mouseenter(function() {
    $btnAnim = TweenMax.to($(this), .4, {
      paddingRight: 20,
      opacity: .5
    });
    $btnIcoAnim = TweenMax.to($(this).find('.fa'), .2, {
      autoAlpha: 1,
      display: 'block'
    });
  }).mouseleave(function() {
    $btnIcoAnim.reverse();
    $btnAnim.reverse();
  });
});
// Creating Global Variables
var $btnElem = $('.btn');
var $btnAnim;
var $btnIcoAnim;




//JS LEARN

function createText(){
  var text = document.createElement('h1');
  text.textContent = 'Hurray for content';
  document.body.appendChild(text);
}


