$(function(){
      var winHeight = $(window).height();
      var winWidth = $(window).width();
      createLayer(50,0.5);
//                createLayer(25,0.50);
//                createLayer(25,1.00);
      function createLayer(count,depth){
        var cloudHeight = winHeight/6;
        var cloudWidth = winWidth+200;
        var $layer = $('<li class="layer" data-depth="'+depth+'" style="z-index: 4;"></li>');
        var width,height,top,left,opts,$image;
        for(var i = 20;i<count;++i){
          width = Math.floor(Math.max(100,Math.random()*427));
          height = Math.floor(Math.max(100,Math.random()*344));
          top = Math.max(-100,(Math.random()*cloudHeight)-(cloudHeight/1.5));
          left = Math.max(-100,(Math.random()*cloudWidth)-(cloudWidth/1.5));
          if(top>left){
              top -= left/1.2;
          }
          else {
              left -= top/1.2;
          }
          opts = {
              width:width,
              height:height,
              bottom:Math.floor((Math.random()*cloudHeight)-100)+'px',
              left:Math.floor((Math.random()*cloudWidth)-100)+'px'
          };
//                        opts[count%2===0?'left':'right'] = left+'px';
          $image = $('<img src="/img/mountain.svg" class="size4" id="mountain'+i+'">');

//                        $layer.append($image);
        }
        $('#scene').append($layer);

      }
      $('.cloud').each(function(i){
          var $this = $(this);
          setTimeout(function(){
              console.log('timeout');
              $this.addClass('hover'+((i%3)+1));
          },Math.floor(i*Math.random()*500))
      });
      $('#scene').height(winHeight);

      $(window).resize(function(){
          $('#scene').height(winHeight);
      });
      $('#scene').parallax();
    });
