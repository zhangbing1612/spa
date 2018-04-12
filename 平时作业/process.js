var $start = $('#star');
var $stop= $('#stop');
var $restart = $('#restart');
var timer=0;
var i=0;
var dg=$('#dg');
$start.click(function(){
  if(timer!=0)
  return;
timer=window.setInterval(function(){
  dg.attr('value',i++);
},100);
});
$stop.click(function(){
  window.clearInterval(timer);
  timer=0;
  
});
$restart.click(function(){
  dg.attr('value',i=0);
  
})

