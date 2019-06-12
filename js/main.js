$(function () {
    'use strict';

    //Adjust Slider Height to cover up all the screen size except (minus) the upper bar and navbar divs (instead of using CSS 100vh "ViewPort height")
    //console.log($('.upper-bar').height(), $('.upper-bar').innerHeight());
    var winH   = $(window).height(),//the window height
        upperH = $('.upper-bar').innerHeight(),//the upper bar div inner height including padding
        navH   = $('.navbar').innerHeight();//the navbar div inner height including padding
    $('.slider, .carousel-item').height(winH - (upperH + navH));




});