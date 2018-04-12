
    //实例化按钮
    var $btn = timerButton({
        'container':'div.min',
        'title':'同意',
        'tlength':3,
        'enable':false
    });
    $btn.on('timer-button-click',function(){
        alert('同意');
        })
