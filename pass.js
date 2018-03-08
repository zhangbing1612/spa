
$('#image').mouseover(function(){
$('#image')[0].src="eye112.png";
$('#pass').attr('type','textbox');
  
});
$('#image').mouseout(function(){
$('#image')[0].src='eye.png';
$('#pass').attr('type','password');
});
