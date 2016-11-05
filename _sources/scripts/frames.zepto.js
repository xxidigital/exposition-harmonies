(function($) { $(document).ready(function($){
    $('.popover').click(function(){
      //if($(document).width() > 576) {}
      $(this).generateFrame();
      return false;
    });

    $('body').on('click','.curtain , .button--frame--close',function (e) {
      $(this).parent(".generateFrame").remove();
      return false;
    });

    $(window).resize(function(event) {
      if($(".generateFrame").length) {
        $(".generateFrame").centerFrame();
      }
    });
  });

  $.fn.generateFrame = function(params) {
    var theType = $(this).attr('data-type');
    var file = "";
    if( theType == "video") {
      file =$(this).attr('href').replace('watch?v=','embed/');
    }
    else if(theType == "image") {
      file = $(this).attr('href');
    }
    params = $.extend({
        type: $(this).attr('data-type'),
        class: "generateFrame",
        source: file,
      },params);
    if(!$('.generateFrame').length) {
      initGenerateFrame();
    }

    // INIT
    function initGenerateFrame() {
      var theFrame = $("<div/>", {
        class: params.class,
        style: 'position:fixed;z-index: 999;width: 80%;',
        type: params.type
      }),
      svg = '<svg width="28" height="28" fill="#FFFFFF" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M1.657 27.658L.343 26.342l26-26 1.314 1.316-26 26m24.686 0l-26-26L1.657.342l26 26-1.314 1.316"/></svg>'
      ;

      theFrame.append('<div class="frameBlock" style="position:relative;height:80vh;overflow: hidden;z-index:200;"></div>');
      if(params.type == "video") {
        theFrame.find(".frameBlock").append($('<iframe src="'+params.source+'" id="theFrame" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen playsinline style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" />'));
      }
      else if(params.type == "image") {
        theFrame.find(".frameBlock").append($('<img src="'+params.source+'" id="theFrame" style="position: absolute;top: 5%;left: 50%; transform: translate(-50%, 0); width: auto;height: 90%;" />'));
      }
      theFrame.append('<div class="curtain" style="display: block;position: fixed;left: 0;top: 0;width: 100%;height: 100%;cursor: pointer;background-color:rgba(0,0,0,0.8);"></div>');
      theFrame.append('<a href="#" class="button--frame--close" style="padding:1rem;display:block;position:absolute;right:-60px;top:10px;z-index:300;"><i class="icon--close">'+svg+'</i></a>');
      theFrame.appendTo($('body'));
      theFrame.centerFrame();
    }
  };

  $.fn.centerFrame = function () {
    this.css("top", Math.max(0, (($(window).height() - $(this).height()) / 2)) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).width()) / 2)) + "px");
    return this;
  };

})(Zepto);
