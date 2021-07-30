$(document).ready(function () {

    var slider = $('.slider__item');
    let currentSlide, nextSlide;

    setInterval(function() {
        currentSlide = $('.active');
        nextSlide = currentSlide.next();
        if(nextSlide.length == 0) 
            nextSlide = slider.first();
        changeSlide(currentSlide, nextSlide);
    },3000);

    function changeSlide(currentSlide, nextSlide) {
        currentSlide.addClass('bienmat').one('webkitAnimationEnd', function() {
            currentSlide.removeClass('bienmat');
            currentSlide.removeClass('active');
        });
        nextSlide.addClass('divao').one('webkitAnimationEnd', function() {
            nextSlide.removeClass('divao');
            nextSlide.addClass('active');
        });
    }

});