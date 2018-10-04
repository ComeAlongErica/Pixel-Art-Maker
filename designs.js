// Select color input
// Select size input
$(document).ready()
console.log('documment ready');

let height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  height = parseInt(height);
  width = parseInt(width);
  console.log('height: ' + height + ' and width: ' + width);
  makeGrid(height, width);
})
// function makeGrid
function makeGrid(x, y){
  // $('tr').remove();
	console.log('makeGrid is running!')
  for (var i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
    }
  }

// event to add color to cell
  $('td').click(function addColor(){
    color = $('#colorPicker').val();
    if ($(this).attr('style')){
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
