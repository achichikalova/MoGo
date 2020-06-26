/* var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
} */


$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Header Fixed */
    checkScroll(scrollOffset);


    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll() {
        if (scrollOffset >= introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }

    };

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            elementId = $(this).data('scroll'),
            elementOffset = $(elementId).offset().top;
        /* 
                $("#nav a").removeClass("active");
                $this.addClass("active"); */

        $("html, body").animate({
            scrollTop: elementOffset
        }, 500);

    });

    /* Burger Menu */
    $("#burger").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("show");
    });
    $(".nav_link").on("click", function (event) {
        event.preventDefault();
        $("#nav").removeClass("show");
    });

    /* Accordion */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            elementId = $(this).data('collapse');

        $(elementId).slideToggle();
    });

    /* Reviews Slider */

    $('.reviews_slider').slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,


    });

});