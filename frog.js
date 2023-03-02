var currentKey = false;
var TimerWalk;
var frogStep = 4;
var frogSpeed = 150;

$(document).ready(function(e){
    $('#frogger').addClass('front-stand');
})

$(document).keydown(function(e){
    if (!currentKey){

        currentKey = e.keyCode;
        //console.log(`this is keydown ${e.keyCode}`)
        switch(e.keyCode){
            case 38: frogWalk('up'); break;
            case 39: frogWalk('right'); break;
            case 40: frogWalk('down'); break;
            case 37: frogWalk('left'); break;
        }
    }
})

$(document).keyup(function(e){
    if (e.keyCode == currentKey){
        currentKey = false;
        clearInterval(TimerWalk);
        $('#frogger').stop(true, true);
    }
})

function frogWalk(dir) {
     if (dir == 'up') dir = 'back';
     if (dir == 'down') dir = 'front';
     
    processWalk(dir);
 
    TimerWalk = setInterval(function() { processWalk(dir); }, frogSpeed);
  }
 

  function processWalk(dir) {
 
    frogStep++;
    if (frogStep == 5) frogStep = 1;
 
    $('#frogger').removeAttr('class');
      switch(frogStep) {
      case 1: $('#frogger').addClass(dir+'-stand'); break;
      case 2: $('#frogger').addClass(dir+'-right'); break;
      case 3: $('#frogger').addClass(dir+'-stand'); break;
      case 4: $('#frogger').addClass(dir+'-left');  break;
    }
 
    switch(dir) {
        case'front':

            $('#frogger').animate({top: '+=32'}, frogSpeed);
            break;
        case'back':
            // console.log('back')
            if ($('#frogger').position().top > 0) {
                $('#frogger').animate({top: '-=32'}, frogSpeed);
            }
            break;
        case'left':
     
            if ($('#frogger').position().left > 0) {
            $('#frogger').animate({left: '-=32'}, frogSpeed);
            }
            break;
        case'right':

            $('#frogger').animate({left: '+=32'}, frogSpeed);
            break;
      }
 
  }

  