var $btn,
timer,

i=9;
$(function(){
  $btn = $('input[type="button"]');
  $btn.val('同意('+i+'s)');
  $btn.attr('disable','disable');
    timer=window.setInterval(function(){
      $btn.val('同意+('+i--+'s)');
        if(i===-1){
          window.clearInterval(timer);
          $btn.val('同意');
          $btn.removeAttr('disable');
        }
      },1000);
      $btn.click(function(){
        alert('ddd');
      });
})
