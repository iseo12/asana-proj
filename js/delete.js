
$(document).ready(function(){
  console.log('ready');
  //hides task when close button is pressed
  $(document).on('click', ".close-btn", function() {
    $(this).parent().hide();
  });
});
