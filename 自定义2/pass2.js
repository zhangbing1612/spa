
        var $btnaddpwd=$('#addpwd'),
        $btngetpwd=$('#getpwd'),
        pwdArry=[];

        $btnaddpwd.click(function(){
            var pwd=new PasswordBox({'container':'div.main'});
            pwdArry.push(pwd);
        })

        $btngetpwd.click(function(){
            pwdArry.forEach(function(pwd) {
                alert(pwd.getpwd());
            });
        }) 

