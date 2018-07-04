
        var $btnaddpwd=$('#addpwd'),
        $btngetpwd=$('#getpwd'),
        pwdArry=[];

        $btnaddpwd.click(function(){
            var pwd=new PasswordBox({'container':'div.main'});
//var pwd=new PasswordBox('div.main');
            pwdArry.push(pwd);
	    console.log(pwdArry)

        })

        $btngetpwd.click(function(){
            pwdArry.forEach(function(pwd) {
                alert(pwd.getpwd());
            });
        }) 

//{'container':'div.main'}