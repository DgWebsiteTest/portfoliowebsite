$(function(){
    $('#menu').slicknav({
        'label':'',
        'brand':'DG',
    });
});

$(document).ready(function() {
    $(".skitter-large").skitter({
        dots:false,
        navigation:true,
        theme:"clean"
    });
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }

    });
  });

  $(document).ready(function(){
      $(".progress-bar-html").animate({
          "width":"80%"
      },1000,function(){
        $(".progress-bar-css").animate({
            "width":"70%"
        },1000,function(){
            $(".progress-bar-javascript").animate({
                "width":"75%"
            },1000,function(){
                $(".progress-bar-jquery").animate({
                    "width":"90%"
                },1000,function(){
                    $(".progress-bar-boot").animate({
                        "width":"70%"
                    },1000);
                });
            });
        });
      });
  });
  
