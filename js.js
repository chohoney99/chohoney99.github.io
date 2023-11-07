//js/dot.js
$(function () {
    var dot = $("#dot ul li");
    var contents = $(".page_wrap>.page");

    dot.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = contents.eq(index);
        var offset = section.offset().top;
        $("html,body").animate({ scrollTop: offset }, 600);
    });

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll >= contents.eq(0).offset().top) {
            dot.css({ "background": "rgba(255,255,255,0.1)" });
            dot.find("a").css({ "background": "rgba(255,255,255,0.5)" });
            dot.removeClass("active");
            dot.eq(0).addClass("active");
            dot.eq(0).find("a").css({ "background": "rgba(0,0,0,0.5)" });
        }
        if (wScroll >= contents.eq(1).offset().top) {
            dot.css({ "background": "rgba(0,0,0,0.7)" });
            dot.find("a").css({ "background": "rgba(0,0,0,0.5)" });
            dot.removeClass("active");
            dot.eq(1).addClass("active");
            dot.eq(1).find("a").css({ "background": "rgba(0,0,0,0.5)" });
        }
        if (wScroll >= contents.eq(2).offset().top) {
            dot.removeClass("active");
            dot.find("a").css({ "background": "rgba(0,0,0,0.5)" });
            dot.eq(2).addClass("active");
            dot.eq(2).find("a").css({ "background": "rgba(0,0,0,0.5)" });
        }
        if (wScroll >= contents.eq(3).offset().top) {
            dot.removeClass("active");
            dot.find("a").css({ "background": "rgba(0,0,0,0.5)" });
            dot.eq(3).addClass("active");
            dot.eq(3).find("a").css({ "background": "rgba(0,0,0,0.5)" });
        }
        if (wScroll >= contents.eq(4).offset().top) {
            dot.removeClass("active");
            dot.find("a").css({ "background": "rgba(0,0,0,0.5)" });
            dot.eq(4).addClass("active");
            dot.eq(4).find("a").css({ "background": "rgba(0,0,0,0.5)" });
        }
        if (wScroll >= contents.eq(5).offset().top) {
            dot.removeClass("active");
            dot.find("a").css({ "background": "rgba(0,0,0,0.5)" });
            dot.eq(5).addClass("active");
            dot.eq(5).find("a").css({ "background": "rgba(0,0,0,0.5)" });
        }

    });

    return false;
});

//js/side.js
$(function () {

    $('.wrap_af').hide();

    $(".fa-bars").click(function () {
        $("#side").animate({ left: '0' }, 500);
        $(this).fadeOut();
        $('.wrap_af').fadeIn();
    });



    $(".fa-chevron-left").click(function () {
        $("#side").animate({ left: '-310' }, 500);
        $(".fa-bars").fadeIn();
        $('.wrap_af').fadeOut();
    });

});


//js/mousewheel.js
$(function () {
    var win_h = $(window).height();
    $('.page').each(function (index) {
        $(this).attr("data-index", win_h * index);
    });

    $('.page').on("mousewheel", function (e) {
        var pagePos = parseInt($(this).attr("data-index"));
        if (e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({ scrollTop: pagePos - win_h });
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({ scrollTop: pagePos + win_h });
            return false;
        }
    });
});

$('.pcimg1').hover(function(){
    $(this).stop().animate({marginTop:-689}, 2000);
}, function(){
    $(this).stop().animate({marginTop:0}, 1000);
});
$('.pcimg2').hover(function(){
    $(this).stop().animate({marginTop:-1217}, 3000);
}, function(){
    $(this).stop().animate({marginTop:0}, 1500);
});
$('.pcimg3').hover(function(){
    $(this).stop().animate({marginTop:-1610}, 4000);
}, function(){
    $(this).stop().animate({marginTop:0}, 2000);
});
$('.pcimg4').hover(function(){
    $(this).stop().animate({marginTop:-1593}, 4000);
}, function(){
    $(this).stop().animate({marginTop:0}, 2000);
});
$('.pcimg5').hover(function(){
    $(this).stop().animate({marginTop:-2809}, 5000);
}, function(){
    $(this).stop().animate({marginTop:0}, 2500);
});

$('.mimg1').hover(function(){
    $(this).stop().animate({marginTop:-1310}, 4000);
}, function(){
    $(this).stop().animate({marginTop:0}, 2000);
});

$('.mimg2').hover(function(){
    $(this).stop().animate({marginTop:-2940}, 6000);
}, function(){
    $(this).stop().animate({marginTop:0}, 3000);
});

$('.mimg3').hover(function(){
    $(this).stop().animate({marginTop:-2470}, 6000);
}, function(){
    $(this).stop().animate({marginTop:0}, 3000);
});

$(".box").hover(function(){
    $(this).find(".img img").stop().animate({width:100}, 500).animate({marginBottom:-100}, 500);
    $(this).children(".txt").show(1000);
},function(){
    $(this).children(".txt").hide(1000);
    $(this).find(".img img").stop().animate({marginBottom:0}, 500).animate({width:150}, 500);
});