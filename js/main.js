$(function() {    


    $(".do-nicescrol").niceScroll("{horizrailenabled:false}");
    $(".carousel").carousel({
        interval: 3000
    });


    $(".gear-check").click(function() {
        $(".colors").toggle("slow");
    });

    $(".colors-option .colors ul li")
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#3282b8").end()
        .eq(2).css("backgroundColor", "#35a86f").end()
        .eq(3).css("backgroundColor", "#fd5e53").end()
        .eq(4).css("backgroundColor", "purple");

    $(".colors-option .colors ul li").click(function() {

        var theme = $(this).attr("data-value");
        
        console.log($("link").eq(8).attr("href","/css/"+theme));
       
    });

    $("#contact").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".contact-us").offset().top
        },1000);

    });

});
$(window).load(function() {

    $(".loading-page .sk-folding-cube ,.loading-page h4").fadeOut(5000, function() {
        $(this).parent().fadeOut(2000, function() {

            $(this).remove();
        });
        $("body").css("overflow", "auto");
    });
});

$(window).scroll(function() {

    var ScrollTop = $(".scroll-Top");

    $(this).scrollTop() > 1000 ? ScrollTop.fadeIn() : ScrollTop.fadeOut();

       // nice Scroll
       $("body").niceScroll();

});

$(".scroll-Top").click(function() {
    $("html , body").animate({
        scrollTop: 0

    }, 1000);
    return false;
});

