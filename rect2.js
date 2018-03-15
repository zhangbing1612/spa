
    var wid = document.getElementById('rectangle-width');
    var hei = document.getElementById('rectangle-height');
    var cal=document.getElementById('rectangle-calc');
    var per=document.getElementById('rectangle-perimeter');
    var area=document.getElementById('rectangle-area');
    var len=document.getElementById('len');
    blnValid = false;
    cal.onclick=function(){
        if(!aa()||!bb()){
            console.log(2)
        }

     per.value = JSON.stringify((Number(wid.value) * 2 + Number(hei.value) * 2));
     area.value = JSON.stringify(Number(wid.value) * Number(hei.value));
    }
    //字符级验证
    // wid.onkeypress=function(e){
    //     if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
    // }
    // hei.onkeypress=function(e){
    //     if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
    // }

    // 字段级验证

//     window.onload=function(){
        
//         wid.onblur=function(){
//             if(wid.value===''){
//                 len.innerHTML='长度不能为空';
//                 return ;
//             }
//             if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(wid.value)){
//                 len.innerHTML='长度必须为有效数值';
//                 return ;
//             }
//             len.innerHTML=''
//             // return true
//         }
//         hei.onblur=function(){
//             if(hei.value===''){
//                 len2.innerHTML='长度不能为空';
//                 return ;
//             }
//             if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(hei.value)){
//                 len2.innerHTML='长度必须为有效数值';
//                 return;
//             }
//              len2.innerHTML=''
//         }
       
// }
 
 function aa(){
        if(wid.value===''){
                            len.innerHTML='长度不能为空';
                            // hei.setAttribute("disabled","disabled")
                            console.log(1);
                            return false;
                        }
                        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(wid.value)){
                            len.innerHTML='长度必须为有效数值';
                            console.log(1);
                            // hei.setAttribute("disabled","disabled")
                            return false;
                        }

                        // else{
                        //     hei.removeAttribute("disabled");
                        // }
                        len.innerHTML=''
                        return true
                    }
        // return true
     function bb(){
        if(hei.value===''){
                            len2.innerHTML='长度不能为空';
                            return false;
                        }
                        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(hei.value)){
                            len2.innerHTML='长度必须为有效数值';
                            return false;
                        }
                         len2.innerHTML='';
                         return true;

    }
    
    

    

  
  