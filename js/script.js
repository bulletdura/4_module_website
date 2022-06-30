$(document).ready(function(){
  $(document).mousemove(function(e){
    $(".events-text").css({
      left: e.clientX,
      top: e.clientY,
    })
  })
  $(".poster1").hover(function(){
    $(".events-text").addClass("opacity-100");
  },function(){
    $(".events-text").removeClass("opacity-100");
  });
});
