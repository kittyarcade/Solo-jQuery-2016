console.log('sourced');

var red = 0;

var green = 0;

var yellow = 0;

var blue = 0;



$(document).ready(function() {

  //get buttons to respond to their individual color
$('.color-button').on('click',function(){
  var color = $(this).attr('data-color');
  console.log(color);

  //append the div for the color-cube to the DOM
  $('.container').append("<div class='color-cube'" + color + "></div>");


//when button is pressed, total number increases with corresponding color
  if(color == 'green'){
  green++;
  $('#green').html("Total green:" + green);
}
  else if (color == 'red'){
    red++;
    $('#red').html('Total red: ' + red);
}
  else if (color == 'yellow'){
    yellow++;
    $('#yellow').html('Total yellow: ' + yellow);
}
  else if (color == 'blue'){
    blue++;
    $('#blue').html('Total blue: ' + blue);
  }

});

});//end doc ready
