
    var wid = document.getElementById('rectangle-width');
    var hei = document.getElementById('rectangle-height');
    var cal=document.getElementById('rectangle-calc');
    var per=document.getElementById('rectangle-perimeter');
    var area=document.getElementById('rectangle-area');
    var len=document.getElementById('len');
    cal.onclick=function(){
     per.value = JSON.stringify((Number(wid.value) * 2 + Number(hei.value) * 2));
     area.value = JSON.stringify(Number(wid.value) * Number(hei.value));
    }
    //字符级验证
    wid.onkeypress=function(e){
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
    }
    hei.onkeypress=function(e){
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
    }

    //字段级验证

    // window.onload=function(){
        
    //     wid.onblur=function(){
    //         if(wid.value===''){
    //             len.innerHTML='长度不能为空';
    //             return ;
    //         }
    //         if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(wid.value)){
    //             len.innerHTML='长度必须为有效数值';
    //             return ;
    //         }
    //         if(wid.value<0){
    //             len.innerHTML='数值必须大于0';
    //             return;
    //         }
    //         len.innerHTML=''
    //         // return true
    //     }
    //     hei.onblur=function(){
    //         if(hei.value===''){
    //             len2.innerHTML='长度不能为空';
    //             return ;
    //         }
    //         if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(hei.value)){
    //             len2.innerHTML='长度必须为有效数值';
    //             return;
    //         }
    //          len2.innerHTML=''
    //     }
       
    // }
    

    

  
  