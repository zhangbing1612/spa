var PasswordBox=function(config){ 
    var $pwd=$('<input type="password">'),
        $peyeimg=$('<img src="eye112.png" />'),
        $div=$('<div class="wd-main">密码：</div>');

        $div.append($pwd);
        $div.append($peyeimg);
        
        $(config.container).append($div);
        console.log(config)

  

    $peyeimg.mouseover(function(){
        $peyeimg.attr('src',"eye.png");
        $pwd.attr('type','text');
    })
    $peyeimg.mouseout(function(){
        $peyeimg[0].src="eye112.png";
        $pwd.attr('type','password');
    })
    this.getpwd=function(){
        return $pwd.val();
    }
  
}
        



 