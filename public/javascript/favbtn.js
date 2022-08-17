//fav button icon
$('.favme').click(function() {
    $(this).toggleClass('active');
});

//when clicked toggle animation
$('.favme').on('click touchstart',
function() {
    $(this).toggleClass('now_animating');
});

//After animation remove class
$(".favme").on('animationfinish', function(){
    $(this).toggleClass('now_animating');
  });