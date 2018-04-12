
        var timerButton=function(config){
        var  $btn = $("<input id='zb-timer-button' type='button'>");
        var i=config.tlength;
        var timer;
        if(config.enable){
            endisableBtn();
        }else{
            disableBtn();
        }
        $(config.container).append($btn);

        $btn.click(function(){
            $btn.trigger('timer-button-click');
        })

        function endisableBtn(){   
                enable=true;
                $btn.val(config.title);
                $btn.removeAttr('disabled');
            }    
            
        function disableBtn(){
            $btn.attr("disabled","disabled");
            $btn.val(config.title+'（'+i+')s')
            timer=window.setInterval(function(){  
                $btn.val(config.title+'（'+i+'s)');
            i--;
            if(i==-1){
                endisableBtn();
                window.clearInterval(timer);
                
                return;
            }
            
            },1000)
            
        };
        return $btn;
    }