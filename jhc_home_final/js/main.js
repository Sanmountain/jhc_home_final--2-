$(document).ready(function () {
    var evenFired = 0;

    if ($(window).width() > 767) {
        $("nav > ul > li").on("mouseover", function () {
            $(".sub_gnb").stop().slideDown(300);
            $(".sub_bg").stop().slideDown(300);
        });
        $("nav > ul > li").on("mouseleave", function () {
            $(".sub_gnb").stop().slideUp(300);
            $(".sub_bg").stop().slideUp(300);
        });
    } else if ($(window).width() < 768) {
        $("nav > ul > li").on("mouseover", function () {
            $(this).find(".sub_gnb").stop().slideDown(300);
        });
        $("nav > ul > li").on("mouseleave", function () {
            $(this).find(".sub_gnb").stop().slideUp(300);
        });
    }

    $(window).on("resize", function () {
        if (!evenFired) {
            if ($(window).width() > 767) {
                $("nav > ul > li").on("mouseover", function () {
                    $(".sub_gnb").stop().slideDown(300);
                    $(".sub_bg").stop().slideDown(300);
                });
                $("nav > ul > li").on("mouseleave", function () {
                    $(".sub_gnb").stop().slideUp(300);
                    $(".sub_bg").stop().slideUp(300);
                });
            } else if ($(window).width() < 768) {
                $("nav > ul > li").on("mouseover", function () {
                    $(this).find(".sub_gnb").stop().slideDown(300);
                });
                $("nav > ul > li").on("mouseleave", function () {
                    $(this).find(".sub_gnb").stop().slideUp(300);
                });
            }
        }
    });

    // nav close btn
    $(".moBtn").on("click", function () {
        var $img = $(this).find("img"),
            $imgSrc = $img.attr("src");

        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $img.attr("src", $imgSrc.replace("toggle.svg", "close.svg"));
            $("header nav").css({
                left: 0,
            });
        } else {
            $(this).removeClass("active");
            $img.attr("src", $imgSrc.replace("close.svg", "toggle.svg"));
            $("header nav").css({
                left: "-100%",
            });
        }
    });
    //
    //    $(window).resize(function(){
    //       var windowWidth = $(window).innerWidth();
    //        if (windowWidth > 767) {
    //                $('header nav').removeClass('active');
    //
    //                $('nav > ul > li').on('mouseover', function(){
    //                  $('.sub_gnb').stop().slideDown(300);
    //                    $('.sub_bg').stop().slideDown(300);
    //                });
    //                $('nav > ul > li').on('mouseleave', function(){
    //                  $('.sub_gnb').stop().slideUp(300);
    //                    $('.sub_bg').stop().slideUp(300);
    //                });
    //
    //                menuSwitch = false;
    //        } else {
    //            if (!menuSwitch) {
    //                $('nave > ul > li').off('mouseover mouseleave');
    //                $('.sub_bg').off('mouseover mouseleave');
    //
    //                $('nav > ul > li').on('mouseover', function(){
    //                    $(this).children('.sub_gnb').stop().slideDown(300);
    //                });
    //                $('nav > ul > li').on('mouseleave', function(){
    //                   $(this).children('.sub_gnb').stop().slideUp(300);
    //                });
    //                menuSwitch = true;
    //
    //        }
    //        }
    //    });
    

    //visual
    $(document).ready(function(){
        var swiper = new Swiper(".mySwiper", {
            loop:true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            autoplay: {
                delay: 4000,
            },
        });
    });
    
    
    //main_autoScanner
    $(document).ready(function (){
        setInterval (function(){
            $('.goto_auto_img_inner ul').delay(2500);
            $('.goto_auto_img_inner ul').animate({marginTop: "-475px"});
            $('.goto_auto_img_inner ul').delay(2500);
            $('.goto_auto_img_inner ul').animate({marginTop: "-950px"});
            $('.goto_auto_img_inner ul').delay(2500);
            $('.goto_auto_img_inner ul').animate({marginTop: "-1425px"});
            $('.goto_auto_img_inner ul').delay(2500);
            $('.goto_auto_img_inner ul').animate({marginTop: "-950px"});
            $('.goto_auto_img_inner ul').delay(2500);
            $('.goto_auto_img_inner ul').animate({marginTop: "-475px"});
            $('.goto_auto_img_inner ul').delay(2500);
            $('.goto_auto_img_inner ul').animate({marginTop: "0px"});
            
        });
    });
    
    //footer
    $(".footer_menu ul li:first-of-type").click(function(){
        $(".personal_wrap").fadeIn("fast");

//         $(".personal_wrap").bind("mouseenter touchstart", function(e){
//             var current = $(window).scrollTop();
//             $(window).scroll(function(event){
//                 $(window).scrollTop(current); 
//             });
//         });
//         $(".personal_wrap").bind("mouseleave touchend", function(e){
//             $(window).off("scroll");
//         });
    });
    
    $(".footer_menu ul li:nth-of-type(2)").click(function(){
        $(".agreement_wrap").fadeIn("fast");
        
//         $(".agreement_wrap").bind("mouseenter touchstart", function(e){
//             var current1 = $(window).scrollTop();
//             $(window).scroll(function(event){
//                 $(window).scrollTop(current1);
//             });
//         });
//         $(".agreement_wrap").bind("mouseleave touchend", function(e){
//             $(window).off("scroll");
//         });
    });
    
    $(".footer_menu ul li:last-of-type").click(function(){
        $(".email_wrap").fadeIn("fast");
//        
//         $(".agreement_wrap").bind("mouseenter touchstart", function(e){
//             var current1 = $(window).scrollTop();
//             $(window).scroll(function(event){
//                 $(window).scrollTop(current1);
//             });
//         });
//         $(".agreement_wrap").bind("mouseleave touchend", function(e){
//             $(window).off("scroll");
//         });
    });
    
    
    //footer_close
    $(".footer_close").click(function(){
        $(".personal_wrap").fadeOut("fast");
        $(".agreement_wrap").fadeOut("fast");
        $(".email_wrap").fadeOut("fast");
        
        // $(".personal_wrap").bind("mouseleave touchend",function(e){
        //     $(window).on("scroll"); 
        // });
        
        // $(".agreement_wrap").bind("mouseleave touchend",function(e){
        //     $(window).on("scroll"); 
        // });
    });
});
