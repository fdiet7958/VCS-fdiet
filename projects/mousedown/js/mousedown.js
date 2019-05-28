$(document).ready(function() {
  $('#mouseMe').mousedown(function(event) {
    switch (event.which) {
      case 1:
        alert('Left Mouse button pressed.');
        break;
      case 2:
        alert('Middle Mouse button pressed.');
        break;
      case 3:
        alert('Right Mouse button pressed.');
        break;
      default:
        alert('You have a strange Mouse!');
    }
  });

  $('.myClass').mousedown(function(event) {
    switch (event.which) {
      case 1:
        /*alert('Left mouse button is pressed');*/
        $(this).addClass('redCell');
        break;
      case 2:
        /*alert('Middle mouse button is pressed');*/
        $(this).addClass('yellowCell');
        break;
      case 3:
        /*alert('Right mouse button is pressed');*/
        $(this).removeClass('redCell');
        $(this).removeClass('yellowCell');
        break;
      default:
        alert('Something went wrong! Are you using a gaming mouse??');
    }
  });

});
