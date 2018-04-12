var $add = $('#add');
var editor = new Behave({
    textarea: $('.main textarea').get(0),
    replaceTab: true,
    softTabs: true,
    tabSize: 2,
    autoOpen: true,
    overwrite: true,
    autoStrip: true,
    autoIndent: true,
    fence: false
  });
$add.click(function(){
        var $code = $('<div style="width:150px"><pre class="javascript"></pre></div>'),
          $txt = $('.main textarea');
    
        if($txt.val() !== '') {
          $code.find('pre').html($txt.val());
          hljs.highlightBlock($code.find('pre').get(0));
          $('.main').append($code);
        }
     
})