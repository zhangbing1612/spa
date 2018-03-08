var $btn,
timer,
i=3;
  $btn = $('#box');
  $btn.val('同意('+i+'s)');
  $btn.attr('disabled','disabled');
    timer=window.setInterval(function(){
      $btn.val('同意('+i--+'s)');
        if(i===-1){
          window.clearInterval(timer);
          $btn.val('同意');
          $btn.removeAttr('disabled');
        }
      },1000);
      $btn.click(function(){
        alert('ddd');
      });

