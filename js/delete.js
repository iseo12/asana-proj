$(document).ready(function(){
  $('.close-btn').click(function(){
    console.log($(this).parent());
    $(this).parent().css("display","none");
  });
});
